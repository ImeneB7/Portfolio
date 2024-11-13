import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import '../sass/_projets.scss';
import data from '../datas/data.json';

const Projets = () => {
    return (
        <>
        <NavBar/>
        <main>
           <h2 className="projet_title">Projets</h2>
           <Carousel data={data}/> 
        </main>
        <Footer/>
        </>
    )
}

export default Projets;