document.addEventListener('DOMContentLoaded', () => {
    renderFooter();

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
});
