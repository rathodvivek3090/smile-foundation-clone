import React from 'react';
import { Link } from 'react-router-dom';

const CSR = () => {
    return (
        <div>
            <section className="page-hero">
                <div className="container">
                    <h1>CSR Partnerships</h1>
                    <p>Partner with ACT Foundation to drive meaningful social impact and fulfill your corporate social
                        responsibility goals.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-block">
                        <h2>Partnership Overview</h2>
                        <p>ACT Foundation actively collaborates with corporate partners under CSR frameworks to design and
                            implement impactful projects aligned with Schedule VII of the Companies Act, 2013.</p>

                        <h3 style={{ marginTop: '2rem' }}>We Offer:</h3>
                        <ul>
                            <li>Project identification and implementation</li>
                            <li>Transparent fund utilisation</li>
                            <li>Impact measurement and reporting</li>
                            <li>Community engagement support</li>
                        </ul>

                        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--white)', borderRadius: '12px', border: '1px solid #eee' }}>
                            <h3>Ready to create impact?</h3>
                            <p>Contact our Corporate Partnerships team to discuss how we can work together.</p>
                            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CSR;
