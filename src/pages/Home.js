import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Certifications from '../components/Certifications';
import Links from '../components/Links';
import personalInfo from '../personal/info.json'; // Import the info.json file
import '../assets/css/styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <main className="main-content">
                <section className="hero-section">
                    <div className="hero-grid">
                        {/* Profile Image */}
                        <div className="hero-image">
                        <img
                            src="/images/profile.jpg"
                            alt="Profile"
                            className="profile-image"
                        />
                        </div>

                        {/* Introduction */}
                        <div className="hero-introduction">
                            <h1>{personalInfo.name}</h1>
                            <p>{personalInfo.title}</p>
                            <p><b>Location:</b> {personalInfo.location}</p>
                            <p><b>Email:</b> {personalInfo.email}</p>
                            <p><b>Phone:</b> {personalInfo.phone}</p>
                            <p>{personalInfo.summary}</p>
                        </div>

                        {/* Skills Section */}
                        <div className="hero-skills">
                            <h3>Skills</h3>
                            <div className="skills-container">
                                {personalInfo.skills.map((skill, index) => (
                                    <span key={index}>{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Tools Section */}
                        <div className="hero-tools">
                            <h3>Tools</h3>
                            <div className="tools-container">
                                {personalInfo.tools.map((tool, index) => (
                                    <span key={index}>{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                <section id="certifications" className="certifications-section">
                    <h2 className="text-center">Certifications</h2>
                    <Certifications />
                </section>

                {/* Experience Section */}
                <section id="experience" className="experience-section">
                    <h2 className="text-center">Experience</h2>
                    <Experience />
                </section>

                {/* Education Section */}
                <section id="education" className="education-section">
                    <h2 className="text-center">Education</h2>
                    <Education />
                </section>

                {/* Projects Section */}
                <section id="projects" className="projects-section">
                    <h2 className="text-center">Projects</h2>
                    <Projects />
                </section>
                
                {/* Resume Section */}
                <section id="resume" className="resume-section">
                    <h2 className="text-center">Resume</h2>
                    <Resume />
                </section>

                {/* Links Section */}
                <section id="links" className="links-section">
                    <Links />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
