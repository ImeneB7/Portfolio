import React from "react";
import '../sass/_about.scss';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const About = () => {
    return (
        <>
        <NavBar/>
        <main>
            <div className="about-container">
                <h2 className="about_title">À propos de moi</h2>
                <div className="about-content">
                <p>Hello moi c'est Imene et j'ai entrepris une reconversion professionnelle en suivant une formation de développeur-intégrateur web chez OpenClassrooms. Depuis plusieurs mois, j'explore avec passion l'univers du développement web, et chaque jour est une nouvelle occasion d'apprendre et de progresser.
                <br></br>
                Je prends un immense plaisir à découvrir et à maîtriser de nouveaux langages de programmation, puis à les intégrer dans des projets concrets. Motivée et engagée dans ce que j'entreprends, je suis toujours curieuse de découvrir davantage pour perfectionner mes compétences et offrir des solutions efficaces et élégantes.
                <br></br>
                Si vous recherchez un profil dynamique, passionné, et prêt à relever des défis en équipe, n'hésitez pas à me contacter. Je serai ravie de contribuer à vos projets et de mettre mon savoir-faire au service de vos besoins.</p>
                </div>
            </div>
        </main>
        <Footer></Footer>
        </>
    )
}

export default About;