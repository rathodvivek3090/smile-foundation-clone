document.addEventListener('DOMContentLoaded', () => {
    console.log('App Initialized v2');

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
            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value : 'Donor';

            const amount = (customAmountInput && customAmountInput.value) ? customAmountInput.value : selectedAmount;

            if (!amount) {
                alert('Please select or enter a donation amount.');
                return;
            }

            // In a real app, this would redirect to payment gateway
            alert(`Thank you ${name} for your generous donation of ₹${amount}! This is a demo, so no payment will be processed.`);
            form.reset();
            // Reset to default
            if (amountBtns.length > 1 && amountBtns[1]) {
                amountBtns[1].click(); // Select 5000 again
            } else if (amountBtns.length > 0) {
                amountBtns[0].click();
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
});
