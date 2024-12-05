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
  {
    id: 2,
    title: "Buckingham Court Apt.",
    image: "./img/bk.png",
    techStack: ["React", "Azure", "JavaScript", "Node.js", "Spring"],
    description: "Developed a responsive cloud-based apartment website attracting 1,500+ views and boosting local engagement and bookings by 20%.",
    link: "https://moonlit-bienenstitch-817d6c.netlify.app/?scroll=home",
  },
  {
    id: 3,
    title: "Google Maps Lead Scraper",
    image: "./img/gg.png",
    techStack: ["HTML", "CSS", "JSON", "JavaScript", "Google Extension"],
    description: "Google Chrome extension tool that automates the extraction of business details from Google Maps, including address, websites, etc. Designed for client outreach and lead generation.",
    link: "https://github.com/ChrisChang8/Google-Maps-Lead-Scraper",
  },
  {
    id: 4,
    title: "John's Donut 2",
    image: "./img/donut.png",
    techStack: ["HTML", "CSS", "Next.js", "JavaScript", "Website"],
    description: "A visually appealing and user-friendly website designed for a local donut shop to showcase their menu, attract more customers, and increase online engagement.",
    link: "https://clever-bombolone-b35e2a.netlify.app/",
  }
];

export default function Project() {
  return (
    <section id="myProjects" className="project--container">
        <div className="section-header">
            <h2 className="section-title">Projects</h2>
        </div>
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
          <a 
            href="/allProjects" 
            className="view-all-button"
          >
            View All Projects →
          </a>
        </div>
    </section>
  );
}
