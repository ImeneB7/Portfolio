import React, { useState } from "react";
import data from '../../datas/data.json';
import arrowLeft from '../../assets/img/arrow_left.png';
import arrowRight from '../../assets/img/arrow_right.png';
import '../Slider/_slider.scss';

const Slider = () => {
    // Filtrons les projets pour en sélectionner deux spécifiques
    const specificProjects = data.filter(
        project => project.id === "project1" || project.id === "project2"
    );
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % specificProjects.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? specificProjects.length - 1 : prevIndex - 1
        );
    };

    const currentProject = data[currentIndex]

    return (
        <div className="home-slider">
            <div className="slider-content">
                <div className="slider-main">
                    <img src={specificProjects[currentIndex].cover} alt={specificProjects[currentIndex].title} />
                    <div className="slider-overlay">
                        <h2>{specificProjects[currentIndex].title}</h2>
                        <p>{currentProject.mission}</p>
                    </div>
                </div>
                <div className="slider-controls">
                    <button onClick={goToPrev} className="arrow prev">
                        <img src={arrowLeft} alt="Previous" />
                    </button>
                    <button onClick={goToNext} className="arrow next">
                        <img src={arrowRight} alt="Next" />
                    </button>
                </div>
            </div>
            <div className="thumbnails">
                {specificProjects.map((project, index) => (
                    <div 
                        key={project.id}
                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <img src={project.cover} alt={project.title} />
                        <span>{project.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
