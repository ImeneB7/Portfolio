require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialiser l'application Express
const app = express();
const PORT = process.env.PORT || 5009;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connecté à MongoDB'))
.catch(err => console.error('Erreur de connexion à MongoDB :', err));

// Modèle pour les projets
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    cover: { type: String },
    skills: { type: [String] },
});

const Project = mongoose.model('Project', projectSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de gestion de projets');
});

// Récupérer tous les projets
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find(); // Récupère tous les projets depuis MongoDB
        res.json(projects);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
});

// Ajouter un nouveau projet
app.post('/api/projects', async (req, res) => {
    const { title, description, cover, skills } = req.body;

    if (!title || !description) {
        return res.status(400).send('Les champs "title" et "description" sont obligatoires');
    }

    try {
        const newProject = new Project({ title, description, cover, skills });
        await newProject.save(); // Sauvegarde le projet dans MongoDB
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
});

// Récupérer un projet par ID
app.get('/api/projects/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findById(id); // Recherche un projet par ID dans MongoDB
        if (!project) {
            return res.status(404).send('Projet introuvable');
        }
        res.json(project);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Backend lancé sur http://localhost:${PORT}`);
});
