import React from 'react';
import personalInfo from '../personal/info.json';
import '../assets/css/styles.css';

const Certifications = () => {
    const { certifications } = personalInfo;

    return (
        <div className="certifications-container">
            <div className="certifications-marquee">
                {certifications.concat(certifications).map((cert, index) => (
                    <div
                        key={index}
                        className="certification-item"
                        onMouseEnter={(e) =>
                            (e.currentTarget.parentElement.style.animationPlayState = 'paused')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.parentElement.style.animationPlayState = 'running')
                        }
                    >
                        <img
                            src={cert.logo}
                            alt={`${cert.name} logo`}
                            className="certification-logo"
                        />
                        <div className="certification-details">
                            <h3>{cert.name}</h3>
                            {cert.date && <p>Date: {cert.date}</p>}
                            {cert.id && <p>Credential ID: {cert.id}</p>}
                            {cert.link && (
                                <p>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Show credential
                                    </a>
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
