const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de gestion de projets');
});

app.get('/api/projects', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erreur serveur lors de la lecture des données')
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/projects', (req, res) => {
    const {title, description} = req.body;

    if (!title || !description) {
        return res.status(400).send('Les champs "title" et "description" sont obligatoires')
    }
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erreur serveur lors de la lecture des données');
        }

        const projects =JSON.parse(data);
        const newProject = {
            id: `project${projects.length + 1}`,
            title,
            description,
        };

        projects.push(newProject);

        fs.writeFile('./data.json', JSON.stringify(projects, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Erreur serveur lors de l\'écriture des données')
            }
            res.status(201).json(newProject);
        });
    });
});

app.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    console.log('ID demandé :', id); 


    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erreur serveur lors de la lecture des données');
        }

        const projects = JSON.parse(data);
        const project = projects.find((p) => p.id === id);

        if (!project) {
            return res.status(404).send('Projet introuvable');
        }

        res.json(project);
    });
});

app.listen(PORT, () => {
    console.log(`Backend lancé sur http://localhost:${PORT}`);
})


