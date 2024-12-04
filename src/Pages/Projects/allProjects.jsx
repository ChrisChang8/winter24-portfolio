import React, { useState } from 'react';
import './allProjects.css';

const projectData = [
  {
    id: 1,
    title: "Valorant Spike GUI",
    image: "./img/spike.png",
    techStack: ["Python", "PyAutoGUI", "Roboflow", "YOLOv8"],
    category: "Machine Learning",
    description: "User-friendly overlay designed for Valorant players.",
    link: "https://github.com/ChrisChang8/spikeBeta-1.5",
  },
  {
    id: 2,
    title: "Buckingham Court Apt.",
    image: "./img/bk.png",
    techStack: ["React", "Azure", "JavaScript", "Node.js"],
    category: "Web Design",
    description: "Responsive cloud-based apartment website.",
    link: "https://moonlit-bienenstitch-817d6c.netlify.app",
  },
  {
    id: 3,
    title: "Google Maps Lead Scraper",
    image: "./img/gg.png",
    techStack: ["HTML", "CSS", "JavaScript", "Google Extension"],
    category: "Databases",
    description: "Google Chrome extension for extracting business details.",
    link: "https://github.com/ChrisChang8/Google-Maps-Lead-Scraper",
  },
  {
    id: 4,
    title: "John's Donut 2",
    image: "./img/donut.png",
    techStack: ["Next.js", "React", "JavaScript"],
    category: "Web Design",
    description: "Local Plano donut restaurant website.",
    link: "https://clever-bombolone-b35e2a.netlify.app/",
  },
  {
    id: 5,
    title: "RR Pinoy",
    image: "./img/thai.png",
    techStack: ["HTML", "CSS", "JavaScript", "Notion API"],
    category: "Web Design",
    description: "Dynamic CRUD system Thai Restaurant BuildforGood Hackathon.",
    link: "https://magnificent-kataifi-60ed3b.netlify.app/",
  },
  {
    id: 6,
    title: "Fix My Pose",
    image: "./img/fix.png",
    techStack: ["Python", "Jupyter", "Numpy", "Mediapipe"],
    category: "Machine Learning",
    description: "Pose estimation for fitness correction.",
    link: "https://github.com/ChrisChang8/Fix-My-Pose",
  },
];

const AllProjects = () => {
  const [filterCategory, setFilterCategory] = useState('All');

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  const categories = ['All', ...Array.from(new Set(projectData.map((project) => project.category)))].sort();

  const filteredProjects = filterCategory === 'All'
    ? projectData
    : projectData.filter((project) => project.category === filterCategory);

  return (
    <div className="all-projects-container" style={{ marginTop: "100px" }}>
      <h2 style={{ marginBottom: "15px" }}>All Projects</h2>
      <div className="all-project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={filterCategory === category ? 'active' : ''}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="all-projects-grid">
        {filteredProjects.map((project) => (
          <a
            href={project.link}
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
            className="all-project-card"
          >
            <div className="all-project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="all-project-content">
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <div className="all-project-tech-stack">
                {project.techStack.map((tech, index) => (
                  <span className="all-project-tech-icon" key={index}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;