import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
            <NavBar />
            <div className="about-container">
                <header className="about-header">
                    <h1 className="about-title">About Us</h1>
                </header>
                <section className="about-info">
                    <h2 className="info-heading">Our Mission</h2>
                    <p className="info-text">
                        We are committed to providing the best service and ensuring our users have a seamless experience. Our goal is to deliver high-quality solutions and support to meet your needs.
                    </p>
                    <h2 className="info-heading">What We Do</h2>
                    <p className="info-text">
                        We offer a range of services designed to help you achieve your goals. From comprehensive solutions to personalized support, we are here to assist you every step of the way.
                    </p>
                </section>
                <section className="contact-info">
                    <h2 className="contact-heading">Contact Us</h2>
                    <p className="contact-text">
                        If you have any questions or need support, feel free to reach out to us:
                    </p>
                    <ul className="contact-list">
                        <li className="contact-item"><strong>Email:</strong> support@example.com</li>
                        <li className="contact-item"><strong>Phone:</strong> +1 (630) 299-5104</li>
                        <li className="contact-item"><strong>Address:</strong> Arlington Heights, Illinois(IL), 60005</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </>
    )
}

export default About
