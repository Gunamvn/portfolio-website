import React, { useState } from 'react';
import personalInfo from "../personal/info.json";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <div className="container">
                <a href="/" className="navbar-brand">PORTFOLIO</a>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span className="toggle-icon">&#9776;</span>
                </div>
                <nav className={`nav-links ${menuOpen ? 'mobile-active' : ''}`}>
                    <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
                    <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
                    <a href="#links" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
                {/* Add Icons Section */}
                <div className="navbar-icons">
                    <a href="https://www.linkedin.com/in/gunam-vardhan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Gunamvn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:${email}" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="tel:${phone}" aria-label="Phone">
                        <i className="fas fa-phone"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
