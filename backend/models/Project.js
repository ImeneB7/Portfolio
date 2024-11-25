const mongoose = require('mongoose');

// Schéma pour les projets
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    cover: {
        type: String, // URL ou chemin vers une image 
    },
    skills: {
        type: [String], // Liste des compétences
    },
}, {
    timestamps: true // Ajoute automatiquement createdAt et updatedAt
});

// Modèle pour les projets
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
