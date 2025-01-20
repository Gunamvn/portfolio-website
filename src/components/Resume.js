import React from 'react';
import '../assets/css/styles.css';

const Resume = () => {
    return (
        <div className="resume-container">
            
            <p>
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
            >
                Download Resume (PDF)
            </a>
            </p>

        </div>
        );
};

export default Resume;