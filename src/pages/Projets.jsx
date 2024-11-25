import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import '../sass/_projets.scss';
import axios from 'axios';
//import data from '../datas/data.json';

const Projets = () => {
    const [projects, setProjects] =useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5009/api/projects')
        .then(response => {
            console.log("Données récupérées :", response.data);
            setProjects(response.data);
            setLoading(false);
        })
        .catch((err => {
            setError("Erreur lors de la récupération des projects");
            console.error(err);
            setLoading(false);
        })
    )
    },[])

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null)
    };

    if (loading) {
        return <p>Chargement des projets...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <>
        <NavBar/>
            <div>
                <h2 className="projet_title">Projets</h2>
                <div className="container_project">
                    {projects.map((project) => ( // {data.slice(0,10).map((project) => ( si pas de back end
                        <ProjectCard
                            key={project.id}
                            cover={project.cover}
                            title={project.title}
                            onClick={() => handleProjectClick(project)}
                        />
                    ))}
                </div>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={closeModal}
                        />
                    )}
            </div>
           


        <Footer/>
        </>
    )
}

export default Projets;