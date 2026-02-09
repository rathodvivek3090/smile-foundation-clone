import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Legal = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <section className="page-hero">
                <div className="container">
                    <h1>Legal & Compliance</h1>
                    <p>Our commitment to transparency, privacy, and ethical operations.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div id="terms" className="content-block">
                        <h2>Terms & Conditions</h2>
                        <p>ACT Foundation operates as a non-profit organisation under applicable Indian laws. By engaging
                            with our website, donating, volunteering, or partnering with us, users agree to act lawfully and
                            ethically. ACT Foundation reserves the right to modify content, programs, or policies to ensure
                            compliance and operational integrity.</p>
                    </div>

                    <div id="privacy" className="content-block">
                        <h2>Privacy Policy</h2>
                        <p>We respect your privacy and are committed to protecting personal information. Any data collected
                            is used solely for communication, reporting, and compliance purposes. We do not sell or misuse
                            personal information and adhere to applicable data protection norms.</p>
                    </div>

                    <div id="refund" className="content-block">
                        <h2>Donation Refund Policy</h2>
                        <p>Donations made to ACT Foundation are utilised for social initiatives and are generally
                            non-refundable. Refunds, if applicable, will be processed in exceptional cases at the discretion
                            of the organisation, in line with Indian regulatory requirements.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Legal;
