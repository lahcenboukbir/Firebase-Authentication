import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="home-container">
                <header className="home-header">
                    <h1 className="home-welcome">Welcome to Our Website!</h1>
                    <p className="home-message">
                        We're glad to have you here. Explore our site and take advantage of our services.
                    </p>
                </header>
            </div>
            <Footer />
        </>
    );
};

export default Home;
