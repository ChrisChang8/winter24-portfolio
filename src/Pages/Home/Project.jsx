import React from 'react';
import './Project.css'; // Ensure this file contains styles for your component

const projects = [
  {
    id: 1,
    title: "Valorant Spike GUI",
    image: "./img/spike.png",
    techStack: ["Python", "PyAutoGUI", "Roboflow", "YOLOv8"],
    description: "User-friendly overlay designed for Valorant players, providing an intuitive timer for spike plants that enhances in-game awareness.",
    link: "https://github.com/ChrisChang8/spikeBeta-1.5",
  },
  // Add more project objects here for dynamic rendering
  {
    id: 2,
    title: "Buckingham Court Apt. Website",
    image: "./img/bk.png",
    techStack: ["React", "Azure", "JavaScript", "Node.js", "Spring"],
    description: "Developed a responsive cloud-based apartment website attracting 1,500+ views and boosting local engagement and bookings by 20%.",
    link: "https://moonlit-bienenstitch-817d6c.netlify.app/?scroll=home",
  },
  {
    id: 3,
    title: "Google Maps Lead Scraper Extension",
    image: "./img/gg.png",
    techStack: ["HTML", "CSS", "JSON", "JavaScript", "Google Extension"],
    description: "Google Chrome extension tool that automates the extraction of business details from Google Maps, including address, websites, etc. Designed for client outreach and lead generation.",
    link: "https://github.com/ChrisChang8/Google-Maps-Lead-Scraper",
  }
];

export default function Project() {
  return (
    <section id="myProjects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span className="tech-icon" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="learn-more"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
