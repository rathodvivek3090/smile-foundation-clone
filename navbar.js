document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();

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
            attachNavbarListeners();
        }
    }

    function attachNavbarListeners() {
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
    }
});
