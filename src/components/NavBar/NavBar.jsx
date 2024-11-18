import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/img/3.png';
import "./_navbar.scss";


const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        } 
    }, [menuOpen]);

    return (
        <nav className="navbar">
            <img className="logo" src={Logo} alt=""/>
           
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}> 
                <li className="menu-item">
                    <NavLink to="/" activeclassname="active">ACCUEIL</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/about" activeclassname="active">À PROPOS</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/projets" activeclassname="active">PROJETS</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/contact" activeclassname="active">CONTACT</NavLink>
                </li>
            </ul>
            <button className="menu-btn" onClick={toggleMenu}>
                <span>
                </span>
            </button>
        </nav>
    )

}

export default NavBar;