import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const isDropdownActive = (paths) => {
        return paths.some(path => location.pathname === path) ? { color: 'var(--primary-color)' } : {};
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    const toggleDropdown = (name, e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            setOpenDropdown(openDropdown === name ? null : name);
        }
    };

    return (
        <header id="main-header" class="header">
            <div className="container header-content">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/images/Act Foundation.png" alt="ACT Foundation" />
                </Link>
                <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>

                    <div className={`dropdown ${openDropdown === 'about' ? 'active' : ''}`}>
                        <button
                            className="dropdown-btn"
                            style={isDropdownActive(['/about', '/vision', '/how-we-work'])}
                            onClick={(e) => toggleDropdown('about', e)}
                        >
                            About <ChevronDown size={14} />
                        </button>
                        <div className="dropdown-content">
                            <Link to="/about" className={isActive('/about')} onClick={closeMenu}>About Us</Link>
                            <Link to="/vision" className={isActive('/vision')} onClick={closeMenu}>Vision & Mission</Link>
                            <Link to="/how-we-work" className={isActive('/how-we-work')} onClick={closeMenu}>How We Work</Link>
                        </div>
                    </div>

                    <Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>Projects</Link>

                    <div className={`dropdown ${openDropdown === 'partners' ? 'active' : ''}`}>
                        <button
                            className="dropdown-btn"
                            style={isDropdownActive(['/csr', '/compliance', '/faq'])}
                            onClick={(e) => toggleDropdown('partners', e)}
                        >
                            Partners <ChevronDown size={14} />
                        </button>
                        <div className="dropdown-content">
                            <Link to="/csr" className={isActive('/csr')} onClick={closeMenu}>CSR Partnerships</Link>
                            <Link to="/compliance" className={isActive('/compliance')} onClick={closeMenu}>Compliance</Link>
                            <Link to="/faq" className={isActive('/faq')} onClick={closeMenu}>Corporate FAQ</Link>
                        </div>
                    </div>

                    <Link to="/contact" className={isActive('/contact')} style={isActive('/contact') ? { color: 'var(--primary-color)' } : {}} onClick={closeMenu}>
                        Contact
                    </Link>
                    <a href="/#donation-form" className="btn btn-primary" onClick={closeMenu}>Support a Cause</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
