import React from 'react';

const projects = [
    { title: 'Project 1', description: 'This is the first project at year 1', link: 'https://github.com/YChhunsann/Smart-Vacuum-Cleaner.git' },
    { title: 'Project 2', description: 'This is the first project at year 2', link: 'https://github.com/YChhunsann/Car_Management_System.git' },
    { title: 'Project 3', description: 'This is the second project at year 2', link: 'https://github.com/YChhunsann/Hotel-Reservation-System.git' },
    { title: 'Project 4', description: 'Here is my own project for deployment', link: 'https://github.com/YChhunsann/Ouk-Chaktrang-Online.git' },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>My Projects</h2>
                <div className="project-cards">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Projects;
