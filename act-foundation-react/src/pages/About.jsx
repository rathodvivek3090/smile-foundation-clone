import React from 'react';

const About = () => {
    return (
        <div>
            <section className="page-hero">
                <div className="container">
                    <h1>About ACT Foundation</h1>
                    <p>Committed to inclusive development, social equity, and sustainable impact.</p>
                </div>
            </section>

            <section id="about" className="content-section">
                <div className="container">
                    <div className="content-block">
                        <h2>About Us</h2>
                        <p>ACT Foundation is an India-based non-profit organisation committed to inclusive development and
                            social equity. We work at the grassroots to address systemic challenges affecting education,
                            health, gender equality, and environmental sustainability.</p>
                        <p>Our strength lies in collaboration—bringing together communities, donors, volunteers,
                            professionals, and corporate partners to act collectively for social good.</p>
                    </div>

                    <div className="divider"></div>

                    <div className="content-block">
                        <h2>Why We Exist</h2>
                        <p>Despite progress, millions in India continue to face barriers to basic education, healthcare,
                            safety, and environmental well-being. These challenges disproportionately affect marginalised
                            and vulnerable communities.</p>
                        <p>ACT Foundation exists to bridge gaps through community-driven initiatives that are ethical,
                            accountable, and sustainable.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
