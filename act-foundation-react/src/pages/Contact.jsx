import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <section className="page-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Join us in creating sustainable impact across India through collective action and shared
                        responsibility.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h3>Location</h3>
                                    <p>ACT Foundation, India</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>connectactf@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone"></i>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+91 8849609020</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <h2>Send us a Message</h2>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group-full">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group-full">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group-full">
                                    <input type="text" placeholder="Subject" required />
                                    3</div>
                                <div className="form-group-full">
                                    <textarea placeholder="Your Message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
