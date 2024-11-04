import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/3.png';
import "./_navbar.scss";

const NavBar = () => {

    return (
        <nav className="navbar">
            <img className="logo" src={Logo} alt=""/>
           
            <ul className="nav-links" > 
                <li className="menu-item"><Link to="/" >ACCUEIL</Link></li>
                <li className="menu-item"><Link to="/about" >À PROPOS</Link></li>
                <li className="menu-item"><Link to="/projets" >PROJETS</Link></li>
                <li className="menu-item"><Link to="/contact" >CONTACT</Link></li>
            </ul>
            <button className="menu-btn" onClick={()=>{}}>
                <span className={"material-symbols-outlined"}
                style={{fontSize: "1.8rem"}} >
                </span>
            </button>
        </nav>
    )

}

export default NavBar;