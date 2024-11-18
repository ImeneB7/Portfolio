import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import '../sass/_projets.scss';
import data from '../datas/data.json';

const Projets = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null)
    }

    return (
        <>
        <NavBar/>
            <div>
                <h2 className="projet_title">Projets</h2>
                <div className="container_project">
                    {data.slice(0,10).map((project) => (
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