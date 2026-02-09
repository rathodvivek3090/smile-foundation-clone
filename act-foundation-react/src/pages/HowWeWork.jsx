import React from 'react';

const HowWeWork = () => {
    return (
        <div>
            <section className="page-hero">
                <div className="container">
                    <h1>How We Work</h1>
                    <p>Our methodology ensures that every intervention is sustainable, scalable, and community-led.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-block">
                        <h2>Our Methodology</h2>
                        <ol style={{ fontSize: '1.1rem', lineHeight: '1.8', marginLeft: '1.5rem' }}>
                            <li><strong>Community needs assessment:</strong> Understanding the ground reality before intervention.</li>
                            <li><strong>Program design with local participation:</strong> Co-creating solutions for ownership.</li>
                            <li><strong>Resource mobilisation:</strong> Engaging donations, CSR, and partnerships.</li>
                            <li><strong>Transparent implementation:</strong> Executing with integrity and efficiency.</li>
                            <li><strong>Impact monitoring and reporting:</strong> Measuring outcomes and ensuring accountability.</li>
                        </ol>
                        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-light)' }}>ACT Foundation maintains
                            compliance with applicable Indian laws and ethical standards, ensuring donor trust and
                            accountability.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
