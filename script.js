document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    console.log('App Initialized v3');

    function renderNavbar() {
        const headerHtml = `
        <div class="container header-content">
            <div class="logo">
                <img src="images/Act Foundation.png" alt="ACT Foundation">
            </div>
            <button class="mobile-menu-btn" aria-label="Toggle Menu">
                <i class="fas fa-bars"></i>
            </button>
            <nav class="main-nav">
                <a href="index.html" class="${window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') ? 'active' : ''}">Home</a>

                <div class="dropdown">
                    <button class="dropdown-btn" style="${['about.html', 'vision.html', 'how_we_work.html'].some(p => window.location.pathname.includes(p)) ? 'color: var(--primary-color);' : ''}">About <i class="fas fa-chevron-down" style="font-size: 0.8em;"></i></button>
                    <div class="dropdown-content">
                        <a href="about.html" class="${window.location.pathname.includes('about.html') ? 'active' : ''}">About Us</a>
                        <a href="vision.html" class="${window.location.pathname.includes('vision.html') ? 'active' : ''}">Vision & Mission</a>
                        <a href="how_we_work.html" class="${window.location.pathname.includes('how_we_work.html') ? 'active' : ''}">How We Work</a>
                    </div>
                </div>

                <a href="Projects.html" class="${window.location.pathname.includes('Projects.html') ? 'active' : ''}">Projects</a>

                <div class="dropdown">
                    <button class="dropdown-btn" style="${['csr.html', 'compliance.html', 'faq.html'].some(p => window.location.pathname.includes(p)) ? 'color: var(--primary-color);' : ''}">Partners <i class="fas fa-chevron-down" style="font-size: 0.8em;"></i></button>
                    <div class="dropdown-content">
                        <a href="csr.html" class="${window.location.pathname.includes('csr.html') ? 'active' : ''}">CSR Partnerships</a>
                        <a href="compliance.html" class="${window.location.pathname.includes('compliance.html') ? 'active' : ''}">Compliance</a>
                        <a href="faq.html" class="${window.location.pathname.includes('faq.html') ? 'active' : ''}">Corporate FAQ</a>
                    </div>
                </div>

                <a href="contact.html" class="${window.location.pathname.endsWith('contact.html') ? 'active' : ''}" style="${window.location.pathname.endsWith('contact.html') ? 'color: var(--primary-color);' : ''}">Contact</a>
                <a href="index.html#donation-form" class="btn btn-primary">Support a Cause</a>
            </nav>
        </div>
        `;
        const headerPlaceholder = document.getElementById('main-header');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHtml;
        }
    }

    function renderFooter() {
        const footerHtml = `
        <div class="container">
            <div class="footer-content">
                <p>&copy; 2025 ACT Foundation. All rights reserved.</p>
                <div class="footer-links">
                    <a href="legal.html#privacy">Privacy Policy</a>
                    <a href="contact.html">Contact Us</a>
                    <a href="faq.html">FAQ</a>
                    <a href="legal.html#terms">Terms & Conditions</a>
                </div>
            </div>
        </div>
        `;
        const footerPlaceholder = document.getElementById('main-footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHtml;
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Amount Selection Logic
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('customAmount');
    let selectedAmount = '5000'; // Default selected

    if (customAmountInput) {
        // Only attach logic if elements exist
        amountBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                amountBtns.forEach(b => b.classList.remove('active'));
                // Add to clicked
                btn.classList.add('active');
                // Update selected amount
                selectedAmount = btn.dataset.value;
                // Clear custom input
                if (customAmountInput) customAmountInput.value = '';
                console.log('Selected Amount:', selectedAmount);
            });
        });

        customAmountInput.addEventListener('input', (e) => {
            // Remove active class from buttons if typing in custom
            if (e.target.value) {
                amountBtns.forEach(b => b.classList.remove('active'));
                selectedAmount = e.target.value;
            }
        });
    }

    // Form Submission
    const form = document.getElementById('donateForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;

            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value : 'Donor';

            const amount = (customAmountInput && customAmountInput.value) ? customAmountInput.value : selectedAmount;

            if (!amount) {
                alert('Please select or enter a donation amount.');
                return;
            }

            // Set loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = 'Processing...';
            }

            // Razorpay Integration
            const options = {
                "key": "rzp_test_ChangeThisToYourKey", // Replace with your actual Test Key ID
                "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "ACT Foundation",
                "description": "Donation for Social Cause",
                "image": "https://via.placeholder.com/150",
                "handler": function (response) {
                    alert(`Donation Successful! Payment ID: ${response.razorpay_payment_id}`);
                    // Here you would typically send the payment ID to your backend for verification
                    form.reset();
                    // Reset to default
                    if (amountBtns.length > 1 && amountBtns[1]) {
                        amountBtns[1].click(); // Select 5000 again
                    } else if (amountBtns.length > 0) {
                        amountBtns[0].click();
                    }
                    // Reset button
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerText = originalBtnText;
                    }
                },
                "modal": {
                    "ondismiss": function () {
                        // Reset button if user closes modal
                        if (submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.innerText = originalBtnText;
                        }
                    }
                },
                "prefill": {
                    "name": name,
                    "email": document.getElementById('email') ? document.getElementById('email').value : '',
                    "contact": document.getElementById('phone') ? document.getElementById('phone').value : ''
                },
                "notes": {
                    "address": "ACT Foundation Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            try {
                const rzp1 = new Razorpay(options);
                rzp1.on('payment.failed', function (response) {
                    alert("Payment Failed. Code: " + response.error.code + ". Reason: " + response.error.description);
                    // Reset button on failure
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerText = originalBtnText;
                    }
                });
                rzp1.open();
            } catch (err) {
                console.error("Razorpay Error:", err);
                alert("Something went wrong initializing payment. Please try again.");
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalBtnText;
                }
            }
        });
    }

    // Mobile Menu Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                if (nav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    document.body.style.overflow = '';
                }
            }
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a:not(.dropdown-btn)').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                document.body.style.overflow = '';
            });
        });
    }

    // Mobile Dropdown Logic
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown-btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Privacy/FAQ Accordion logic if present
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                if (item) item.classList.toggle('active');
            });
        });
    }
});
