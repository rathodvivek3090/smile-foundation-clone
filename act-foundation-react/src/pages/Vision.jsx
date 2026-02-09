import React from 'react';

const Vision = () => {
    return (
        <div>
            <section className="page-hero">
                <div className="container">
                    <h1>Vision, Mission & Values</h1>
                    <p>The guiding principles that drive our commitment to social change.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-block" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Our Vision</h2>
                        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>An India where every individual has access to
                            education, health, dignity, and a safe environment.</p>
                    </div>
                </div>
            </section>

            <section className="content-section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="content-block" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Our Mission</h2>
                        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>To mobilise collective action and partnerships to
                            empower communities through sustainable social interventions.</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Core Values</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <i className="fas fa-hand-holding-heart"></i>
                            <h3>Community-first</h3>
                            <p>Community-first approach in all our initiatives.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-balance-scale"></i>
                            <h3>Transparency</h3>
                            <p>Transparency and accountability in operations and funding.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-users"></i>
                            <h3>Inclusion</h3>
                            <p>Equity and inclusion for all, regardless of background.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-hands-helping"></i>
                            <h3>Collaboration</h3>
                            <p>Collaboration and shared responsibility with partners.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-leaf"></i>
                            <h3>Sustainability</h3>
                            <p>Sustainability and long-term impact over short-term gains.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vision;
