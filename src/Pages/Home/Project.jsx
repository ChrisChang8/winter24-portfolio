import React, { useEffect } from "react";
import "./Project.css";

const projects = [
  {
    id: 3,
    title: "LinkUp Social Media",
    image: "./img/social.gif",
    techStack: ["Mobile Dev.", "Supabase", "React Native"],
    description:
      "LinkUp is a social networking app that enables users to share posts, connect with others, and engage through likes, comments, and real-time updates.",
    link: "https://github.com/ChrisChang8/",
  },
  {
    id: 1,
    title: "Valorant Spike GUI",
    image: "./img/val.gif",
    techStack: ["Machine Learning", "Roboflow.", "Python."],
    description:
      "Overlay designed for Valorant players, providing an intuitive timer for spike plants that enhances in-game awareness.",
    link: "https://github.com/ChrisChang8/spikeBeta-1.5",
  },
  {
    id: 2,
    title: "Buckingham Court Apt.",
    image: "./img/apt.gif",
    techStack: ["Web Dev.", "Azure", "React."],
    description:
      "Developed a responsive cloud-based apartment website attracting 1,500+ views and boosting local engagement and bookings by 20%.",
    link: "https://moonlit-bienenstitch-817d6c.netlify.app/?scroll=home",
  },
  {
    id: 4,
    title: "RR Pinoy Hackathon",
    image: "./img/hack.gif",
    techStack: ["Web Dev.", "Notion API", "HTML & CSS"],
    description:
      "Dynamic website and CMS for Pinoy Thai Cuisine using the Notion API, overcoming challenges to deliver adaptability and future enhancements.",
    link: "https://devpost.com/software/rr-pinoy-thai-cuisine-notion-website",
  },
];

export default function Project() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".project-card");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="myProjects" className="section-container">
      <div className="section-header">
        <h1 className="section-title">Featured Projects.</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          
          <div className="project-card" key={project.id}>
              <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span className="tech-icon" key={index}>
                  {tech}
                </span>
              ))}
              </div>
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-content">
              <h3>{project.title}</h3>
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
    </section>
  );
}
