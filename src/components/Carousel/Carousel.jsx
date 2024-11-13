import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import data from '../../datas/data.json';
import './_carousel.scss';
import arrowLeft from '../../assets/img/arrow_left.png';
import arrowRight from '../../assets/img/arrow_right.png';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    
    const thumbnailIndices = [(currentIndex + 1) % data.length];

    

    console.log("Projet actuel:", data[currentIndex].title);
    console.log("Miniatures:", thumbnailIndices.map(index => data[index].title));




    return (
        <div className="carousel">
            <div className="list">
                <ProjectCard 
                    project={data[currentIndex]} 
                    isActive={true} 
                    isThumbnail={false}
                />
            </div>
            <div className="arrows">
                <button onClick={goToPrev} className="prev">
                    <img src={arrowLeft} alt="Previous" />
                </button>
                <button onClick={goToNext} className="next">
                    <img src={arrowRight} alt="Next" />
                </button>
            </div>
            <div className="thumbnails">
                {thumbnailIndices.map((index) => (
                    <ProjectCard 
                        key={index} 
                        project={data[index]} 
                        isThumbnail={true}
                        isActive={index === currentIndex} 
                        onClick={() => setCurrentIndex(index)}
                    />
                
            ))}
            </div>
        </div>
    );
};

export default Carousel;
