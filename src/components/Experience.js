import React from 'react';
import personalInfo from '../personal/info.json';
import '../assets/css/styles.css';

const Experience = () => {
    const { experience } = personalInfo;

    return (
        <div className="container">
            <div className="experience-container">
                {experience.map((job, index) => (
                    <div key={index} className="experience-item">
                        <img
                            src={job.companyLogo}
                            alt={`${job.company} logo`}
                            className="experience-logo"
                        />
                        <div className="experience-details">
                            <h3>{job.role}</h3>
                            <p>{job.company}</p>
                            <p>{job.duration}</p>
                            <h5>Skills & Tools:</h5>
                        <div className="skills-container">
                        {job.skills.split(', ').map((skill, idx) => (
                            <span key={idx} className="skill-item">
                            {skill}
                            </span>
                        ))}
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;