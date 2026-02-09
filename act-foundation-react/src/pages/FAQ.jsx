import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <ChevronDown
                    size={20}
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                />
            </button>
            <div className="faq-answer" style={{ maxHeight: isOpen ? '500px' : '0' }}>
                {answer}
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <div>
            <section className="page-hero">
                <div className="container">
                    <h1>Due Diligence & Compliance – Corporate FAQ</h1>
                    <p>Support corporate due diligence and facilitate transparent, compliant CSR partnerships.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="faq-container">
                        <FAQItem
                            question="1. What is the legal status of ACT Foundation?"
                            answer={<p>ACT Foundation is a registered non-profit organisation in India, established to undertake charitable activities in education, health, women empowerment, and environmental sustainability. The organisation operates on a not-for-profit basis and follows applicable Indian laws and regulatory frameworks.</p>}
                        />
                        <FAQItem
                            question="2. Is ACT Foundation eligible to implement CSR projects?"
                            answer={<p>ACT Foundation has initiated the required processes to be recognised as a CSR implementation agency under the Companies Act, 2013. While formal registrations are under process, all programs are aligned with Schedule VII activities, and implementation follows CSR governance, documentation, and reporting standards.</p>}
                        />
                        <FAQItem
                            question="3. What is the status of 12A and 80G registrations?"
                            answer={<p>ACT Foundation has applied for registration under Section 12A and certification under Section 80G of the Income Tax Act, 1961. Both applications are currently under process with the relevant authorities. The organisation ensures transparent and purpose-driven utilisation of all funds during this period.</p>}
                        />
                        <FAQItem
                            question="4. How are CSR and donor funds utilised?"
                            answer={<p>All funds received are deployed strictly towards approved programs, project execution, and essential administrative expenses related to implementation. Fund utilisation is tracked program-wise to ensure accountability and traceability.</p>}
                        />
                        <FAQItem
                            question="5. What governance mechanisms are in place?"
                            answer={<p>ACT Foundation follows structured governance practices, including: oversight by a governing body, defined approval and review processes, separation of strategic oversight and program execution, and internal financial controls.</p>}
                        />
                        <FAQItem
                            question="6. How does ACT Foundation ensure transparency?"
                            answer={<p>Transparency is ensured through: clear documentation of projects and expenses, periodic progress and utilisation reports, open communication with corporate partners and donors, and availability of records for statutory or partner review.</p>}
                        />
                        <FAQItem
                            question="7. Does ACT Foundation provide CSR reports and documentation?"
                            answer={<p>Yes. ACT Foundation provides: project proposals and budgets, utilisation certificates (as applicable), impact and progress reports, and supporting documentation required for CSR disclosures.</p>}
                        />
                        <FAQItem
                            question="8. How is impact measured?"
                            answer={<p>Impact is assessed using defined output and outcome indicators relevant to each program. Community participation, beneficiary feedback, and on-ground monitoring form the basis of impact evaluation.</p>}
                        />
                        <FAQItem
                            question="9. Can ACT Foundation customise CSR projects?"
                            answer={<p>Yes. CSR programs can be designed or customised in collaboration with corporate partners to align with CSR objectives, geographic priorities, and thematic focus areas, while remaining compliant with statutory norms.</p>}
                        />
                        <FAQItem
                            question="10. Is ACT Foundation open to audits or due diligence reviews?"
                            answer={<p>ACT Foundation welcomes due diligence processes and cooperates fully with corporate partners, auditors, and authorised agencies as part of ethical and transparent collaboration.</p>}
                        />
                        <FAQItem
                            question="11. How does ACT Foundation manage compliance risks?"
                            answer={<p>Compliance risks are managed through continuous monitoring of regulatory requirements, documentation discipline, ethical financial practices, and timely reporting.</p>}
                        />
                        <FAQItem
                            question="12. Who should corporates contact for due diligence or CSR discussions?"
                            answer={<p>Corporate representatives may reach out to ACT Foundation through the official contact channels listed on the website for CSR proposals, documentation, or due diligence coordination.</p>}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
