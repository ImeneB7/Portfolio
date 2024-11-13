import React from "react";
import './_projectcard.scss';

const ProjectCard = ({ project, isActive, isThumbnail, onClick }) => {
    const handleButtonClick = (e, url) => {
        e.stopPropagation();
        window.open(url, "_blank");
    }
    return (
        <div 
            className={`project-card ${isActive ? 'active' : ''} ${isThumbnail ? 'thumbnail' : ''}`}
            style={{ backgroundImage: `url(${project.cover || ''})` }}
            onClick={onClick}
        >
            {!isThumbnail && (
                <div className="content">
                    <div className="title">{project.title}</div>
                    <div className="name">{project.category}</div>
                    <div className="description">{project.description}</div>
                    <div className="btn">
                        {project.site && (
                            <button onClick={(e) => handleButtonClick(e, project.site)}>Voir le projet</button>
                        )}
                        {project.github && (
                            <button onClick={(e) => handleButtonClick(e, project.github)}>GitHub</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectCard;
