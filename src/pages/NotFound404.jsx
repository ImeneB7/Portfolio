import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


const NotFound404 = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className="error-content">
            <h2>404</h2>
            <p>Oops.. page not found</p>
        </div>
        <Footer></Footer>
        </>
    )
}

export default NotFound404;