import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider//Slider';

const Home = () => {
    return (
        <>
        <Header/>
            <main>
                <Slider></Slider>
            </main>
        <Footer/>
        </>
    )
}

export default Home;