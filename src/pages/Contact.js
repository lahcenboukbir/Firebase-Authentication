import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="contact-container">
                <header className="contact-header">
                    <h1 className="contact-title">Contact Us</h1>
                </header>
                <section className="contact-form-section">
                    <h2 className="contact-form-title">Get in Touch</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" className="form-input" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" id="email" className="form-input" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" className="form-textarea" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="form-action">
                            <button type="submit" className="form-submit">Send Message</button>
                        </div>
                    </form>
                </section>
                <section className="contact-details">
                    <h2 className="contact-details-title">Our Contact Information</h2>
                    <p className="contact-detail">
                        <strong>Email:</strong> support@example.com
                    </p>
                    <p className="contact-detail">
                        <strong>Phone:</strong> +1 (630) 299-5104
                    </p>
                    <p className="contact-detail">
                        <strong>Address:</strong> Arlington Heights, Illinois(IL), 60005
                    </p>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Contact
