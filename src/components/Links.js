import React from "react";
import personalInfo from "../personal/info.json";

const Links = () => {
    const { links, email, phone } = personalInfo;

    // List of contact links
    const contactLinks = [
        { href: links.linkedin, icon: "fab fa-linkedin", label: "LinkedIn" },
        { href: "https://github.com/Gunamvn", icon: "fab fa-github", label: "GitHub" },
        { href: `mailto:${email}`, icon: "fas fa-envelope", label: "Email" },
        { href: `tel:${phone}`, icon: "fas fa-phone", label: "Phone" },
    ];

    return (
        <div className="container text-center contact-section">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to use the details below:</p>
            <div className="contact-links">
                {contactLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-link"
                        aria-label={link.label}
                    >
                        <i className={`${link.icon} fa-2x`}></i>
                    </a>
                ))}
            </div>
            <div className="contact-info">
                <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
                <p>Available to join immediately</p>
            </div>
        </div>
    );
};

export default Links;