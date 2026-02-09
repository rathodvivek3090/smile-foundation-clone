import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="main-footer" className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; 2025 ACT Foundation. All rights reserved.</p>
                    <div className="footer-links">
                        <Link to="/legal#privacy">Privacy Policy</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/legal#terms">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
