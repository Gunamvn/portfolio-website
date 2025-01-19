import React from 'react';
import personalInfo from '../personal/info.json';
import '../assets/css/styles.css';

const Projects = () => {
    const { projects } = personalInfo;

    return (
        <div className="container">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img
                            src={project.image}
                            alt={`${project.name} logo`}
                            className="project-logo"
                        />
                        <div className="project-details">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;