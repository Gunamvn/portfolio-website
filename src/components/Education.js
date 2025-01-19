import React from 'react';
import personalInfo from '../personal/info.json';
import '../assets/css/styles.css';

const Education = () => {
    const { education } = personalInfo;

    return (
        <div className="container">
            <div className="education-container">
                {education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <div className="education-details">
                            <h3>{edu.degree}</h3>
                            <p>{edu.institution}</p>
                            <p>{edu.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;