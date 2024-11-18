import React from "react";
import './_projectmodal.scss'

const ProjectModal = ({project, onClose}) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{project.title}</h2>
                <img src={project.cover} alt={project.alt || "Image du projet"} />
                <p>{project.description}</p>
                <p>{project.mission}</p>
            </div>
        </div>
    )
}

export default ProjectModal;