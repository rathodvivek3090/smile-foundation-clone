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

// Read More Button Logic
const readMoreBtns = document.querySelectorAll('.read-more-btn');
if (readMoreBtns.length > 0) {
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const moreContent = btn.previousElementSibling;
            if (moreContent && moreContent.classList.contains('more-content')) {
                if (moreContent.style.display === 'none') {
                    moreContent.style.display = 'block';
                    btn.textContent = 'Read Less';
                } else {
                    moreContent.style.display = 'none';
                    btn.textContent = 'Read More';
                }
            }
        });
    });
}
