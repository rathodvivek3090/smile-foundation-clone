import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [selectedAmount, setSelectedAmount] = useState('5000');
    const [customAmount, setCustomAmount] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    // Form states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pan, setPan] = useState('');

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount('');
    };

    const handleDonate = (e) => {
        e.preventDefault();
        const amount = customAmount || selectedAmount;

        if (!amount) {
            alert('Please select or enter a donation amount.');
            return;
        }

        setIsProcessing(true);

        const options = {
            "key": "rzp_test_ChangeThisToYourKey", // Replace with your actual Test Key ID
            "amount": amount * 100,
            "currency": "INR",
            "name": "ACT Foundation",
            "description": "Donation for Social Cause",
            "image": "https://via.placeholder.com/150",
            "handler": function (response) {
                alert(`Donation Successful! Payment ID: ${response.razorpay_payment_id}`);
                setName('');
                setEmail('');
                setPhone('');
                setPan('');
                setSelectedAmount('5000');
                setCustomAmount('');
                setIsProcessing(false);
            },
            "modal": {
                "ondismiss": function () {
                    setIsProcessing(false);
                }
            },
            "prefill": {
                "name": name,
                "email": email,
                "contact": phone
            },
            "notes": {
                "address": "ACT Foundation Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        try {
            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                alert("Payment Failed. Code: " + response.error.code + ". Reason: " + response.error.description);
                setIsProcessing(false);
            });
            rzp1.open();
        } catch (err) {
            console.error("Razorpay Error:", err);
            alert("Something went wrong initializing payment. Please try again.");
            setIsProcessing(false);
        }
    };

    return (
        <div>
            <section id="hero" className="hero-section">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1>Acting Together for Stronger Communities Across India</h1>
                        <p>ACT Foundation is a community-rooted non-profit organisation working across education, health,
                            women empowerment, and environmental protection. We partner directly with local communities,
                            grassroots organisations, volunteers, and responsible institutions to create sustainable and
                            measurable social impact.</p>
                        <p>Our work is grounded in the belief that real change begins at the community level—when people are
                            informed, empowered, and supported to shape their own futures.</p>
                        <div className="hero-buttons">
                            <a href="#donation-form" className="btn btn-primary btn-lg">Support a Cause</a>
                            <Link to="/contact" className="btn btn-outline btn-lg">Volunteer With Communities</Link>
                            <Link to="/csr" className="btn btn-outline btn-lg">CSR & Institutional Partnerships</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="approach" className="content-section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Our Approach</h2>
                        <div className="divider"></div>
                        <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>ACT Foundation works closely with
                            communities to identify real needs and co-create solutions. We focus on:</p>
                    </div>
                    <div className="features-grid" style={{ marginTop: '2rem' }}>
                        <div className="feature-card">
                            <i className="fas fa-users"></i>
                            <h3>Community Participation</h3>
                            <p>Community participation and ownership in every initiative.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-hand-holding-usd"></i>
                            <h3>Ethical Funds</h3>
                            <p>Ethical use of funds and transparent reporting.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-seedling"></i>
                            <h3>Long-term Impact</h3>
                            <p>Focus on long-term impact over short-term relief.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-flag"></i>
                            <h3>National Alignment</h3>
                            <p>Alignment with India’s social development priorities.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Focus Areas</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <i className="fas fa-book-reader"></i>
                            <h3>Education</h3>
                            <p>Improving access to quality education for children and youth from underserved communities
                                through learning support, digital access, and community awareness.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-heartbeat"></i>
                            <h3>Health</h3>
                            <p>Strengthening preventive healthcare, nutrition awareness, and access to basic health
                                services, particularly for women and children.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-female"></i>
                            <h3>Women Empowerment</h3>
                            <p>Enabling economic independence, health awareness, and leadership opportunities for women at
                                the grassroots level.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-tree"></i>
                            <h3>Environment</h3>
                            <p>Promoting environmental responsibility through local action, awareness, and sustainable
                                community practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="donation-form" className="donation-section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="donation-card">
                        <div className="section-header">
                            <h2>Support Our Mission</h2>
                            <div className="divider"></div>
                            <p>Your contribution can change lives. Donate today.</p>
                        </div>
                        <form id="donateForm" onSubmit={handleDonate}>
                            <div className="form-group">
                                <label>Choose Amount (₹)</label>
                                <div className="amount-grid">
                                    <button
                                        type="button"
                                        className={`amount-btn ${selectedAmount === '1000' ? 'active' : ''}`}
                                        onClick={() => handleAmountClick('1000')}
                                    >
                                        1,000
                                    </button>
                                    <button
                                        type="button"
                                        className={`amount-btn ${selectedAmount === '5000' ? 'active' : ''}`}
                                        onClick={() => handleAmountClick('5000')}
                                    >
                                        5,000
                                    </button>
                                    <button
                                        type="button"
                                        className={`amount-btn ${selectedAmount === '10000' ? 'active' : ''}`}
                                        onClick={() => handleAmountClick('10000')}
                                    >
                                        10,000
                                    </button>
                                    <input
                                        type="number"
                                        id="customAmount"
                                        className="amount-input"
                                        placeholder="Custom Amount"
                                        min="100"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                    />
                                </div>
                            </div>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pan">PAN Card (for 80G)</label>
                                    <input
                                        type="text"
                                        id="pan"
                                        value={pan}
                                        onChange={(e) => setPan(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: '1.5rem' }}
                                disabled={isProcessing}
                            >
                                {isProcessing ? 'Processing...' : 'Donate Now'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
