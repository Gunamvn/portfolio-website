import React from 'react';
import '../assets/css/styles.css';

const Resume = () => {
    return (
        <div className="resume-container">
            {/* PDF Preview */}
            <iframe
                src="/resume.pdf"
                width="100%"
                height="600px"
                title="Resume Preview"
                className="resume-iframe"
            ></iframe>
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