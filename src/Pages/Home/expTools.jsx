import React, { useEffect } from 'react';
import './expTools.css';

const experienceData = [
    {
        id: 1,
        tags: ['AI Development', 'Mobile App.','Internship'],
        title: 'Generative AI and Text-to-Speech Development →',
        description:
            'Built a Generative AI model with Text-to-Speech for an Android application, improving speech error detection by 21.3% and model accuracy to 95.4%.',
        alt: 'MeshTek.',
        date: 'AUG 24 - NOV 24',
    },
    {
        id: 2,
        tags: ['Robotics', 'Web Dev.', "Game Design"],
        title: 'Teaching and Mentorship for Young Developers →',
        description:
            'Taught web development (HTML, CSS, C++), led game design projects using Python/Java, and mentored 100+ students in robotics and programming.',
        alt: 'Youth Tech Inc.',
        date: 'MAY 24 - AUG 24',
    },
    {
        id: 3,
        tags: ['Data Analysis', 'Data Entry', 'Automation'],
        title: 'Financial Modeling and Automation →',
        description:
            'Automated tenant rent rolls and expense reports, saving 100+ hours/month, and optimized financial models to cut repair costs by 4%.',
        alt: 'Buckingham Apts.',
        date: 'MAR 23 - AUG 23',
    },
];

export default function ExpTools() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active'); // Add the 'active' class
                    } else {
                        entry.target.classList.remove('active'); // Remove it when out of view
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        const elements = document.querySelectorAll('.fade-up');
        elements.forEach((el) => observer.observe(el));

        // Clean up the observer when the component unmounts
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section id="myWork" className="experience-section">
            <div className="container">
                <h1 className="section-title">Work.</h1>
                <div className="experience-cards">
                    {experienceData.map((exp) => (
                        <div key={exp.id} className="experience-card fade-up">
                            <div className="tags-row">
                                {exp.tags.map((tag, index) => (
                                    <span key={index} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="experience-title">{exp.title}</h3>
                            <p className="experience-description">{exp.description}</p>
                            <div className="company-info">
                                <div className="company-name">{exp.alt}</div>
                                <div className="company-date">{exp.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
