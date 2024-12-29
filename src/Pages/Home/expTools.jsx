import React, { useEffect } from 'react';
import './expTools.css';

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
                    {/* MeshTek */}
                    <div className="experience-card fade-up">
                        <div className="tags-row">
                            <span className="tag">AI Development</span>
                            <span className="tag">Internship</span>
                        </div>
                        <h3 className="experience-title">
                            Generative AI and Text-to-Speech Development →
                        </h3>
                        <p className="experience-description">
                            Built a Generative AI model with Text-to-Speech for an Android application, improving speech error detection by 21.3% and model accuracy to 95.4%.
                        </p>
                        <div className="company-image">
                            <img src="https://via.placeholder.com/600x300.png?text=ILUNMI+MESHTEK%0AAUG+24+-+NOV+24." alt="MeshTek" />
                        </div>
                    </div>

                    {/* Youth Tech Inc */}
                    <div className="experience-card fade-up">
                        <div className="tags-row">
                            <span className="tag">Web Development</span>
                            <span className="tag">Mentorship</span>
                        </div>
                        <h3 className="experience-title">
                            Teaching and Mentorship for Young Developers →
                        </h3>
                        <p className="experience-description">
                            Taught web development (HTML, CSS, C++), led game design projects using Python/Java, and mentored 100+ students in robotics and programming.
                        </p>
                        <div className="company-image">
                            <img src="https://via.placeholder.com/600x300.png?text=YOUTH+TECH+INC.%0AMAY+24+-+AUG+24." alt="YT" />
                        </div>
                    </div>

                    {/* Buckingham Court Apartments */}
                    <div className="experience-card fade-up">
                        <div className="tags-row">
                            <span className="tag">Data Analysis</span>
                            <span className="tag">Automation</span>
                        </div>
                        <h3 className="experience-title">
                            Financial Modeling and Automation →
                        </h3>
                        <p className="experience-description">
                            Automated tenant rent rolls and expense reports, saving 100+ hours/month, and optimized financial models to cut repair costs by 4%.
                        </p>
                        <div className="company-image">
                            <img src="https://via.placeholder.com/600x300.png?text=BUCKINGHAM+APT.+%0AMAR+23+-+AUG+23." alt="APT" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
