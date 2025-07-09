import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "CRUD Project",
    description: "A full CRUD app with Create, Read, Update, Delete features built using React and localStorage.",
    live: "https://crud-livid-one.vercel.app/",
    github: "https://github.com/sagar0kaushik/crud"
  },
  {
    title: "Password Generator",
    description: "A powerful password generator that lets users create secure passwords with adjustable options and copy to clipboard.",
    live: "https://password-maker-sagarkaushik584-gmailcoms-projects.vercel.app/",
    github: "https://github.com/sagar0kaushik/password-maker-"
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio website you're on now! Built using React, animations, dark/light mode, and smooth routing.",
    live: "#",
    github: "https://github.com/yourusername/portfolio-site"
  },
  {
    title: "React Calculator",
    description: "A clean, responsive calculator app built using React with full keyboard support and live preview functionality.",
    live: "https://react-cal-sagarkaushik584-gmailcoms-projects.vercel.app/",
    github: "https://github.com/sagar0kaushik/react-cal"
  },
  {
    title: "To-Do List App",
    description: "A modern to-do list app with task management, localStorage persistence, and minimal UI.",
    live: "https://todo-sagarkaushik584-gmailcoms-projects.vercel.app/",
    github: "https://github.com/sagar0kaushik/todo"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading"> My  Projects </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card pop-on-hover" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn live-btn">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn code-btn">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


