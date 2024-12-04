import './expTools.css';

export default function ExpTools() {
    return (
        <section id="myTools" className="skills-experience-section">
            <div className="container">
                <div className="skills-section">
                    <h2 className="section-title">Tools</h2>
                    <div className="skills-icons">
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" />
                            <p>NodeJS</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" alt="Supabase" />
                            <p>Supabase</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                            <p>MongoDB</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" />
                            <p>ReactJS</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" />
                            <p>Azure</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" />
                            <p>Vite</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                            <p>TypeScript</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                            <p>PostgreSQL</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                            <p>Java</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                            <p>Python</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                            <p>Git</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                            <p>C#</p>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="NextJS" />
                            <p>NextJS</p>
                        </div>
                    </div>
                </div>
                <div className="experience-section" id="myExp">
                    <h2 className="section-title">Experiences</h2>
                    <div className="timeline">
                        {/* AI Software Engineer Intern */}
                        <div className="timeline-item green-timeline">
                            <div className="timeline-content">
                                <h3>AI Software Engineer Intern | MeshTek</h3>
                                <p className="position">August 2024 – Present</p>
                                <p className="description">
                                    Built a Generative AI model with Text-To-Speech for Android, enhancing 100+ RGB commands. Improved user speech error detection by 21.3% and model accuracy to 95.4%. Streamlined data flow by writing and filtering 100+ JSON files, achieving 96.4% model accuracy.
                                </p>
                            </div>
                        </div>
                        {/* Lead Coding Instructor */}
                        <div className="timeline-item yellow-timeline">
                            <div className="timeline-content">
                                <h3>Lead Coding Instructor | Youth Tech Inc.</h3>
                                <p className="position">May 2024 – August 2024</p>
                                <p className="description">
                                    Taught web development (HTML, CSS, C++) and created 6+ interactive UIs. Led game design projects using Python/Java with 50+ assets. Mentored 100+ students in robotics, programming, and autonomous navigation.
                                </p>
                            </div>
                        </div>
                        {/* Data Analyst */}
                        <div className="timeline-item blue-timeline">
                            <div className="timeline-content">
                                <h3>Data Analyst | Buckingham Court Apartments</h3>
                                <p className="position">March 2023 – August 2023</p>
                                <p className="description">
                                    Automated tenant rent rolls and expense reports, saving 100+ hours/month. Forecasted repair costs, cutting expenses by 4%. Optimized financial models for better forecasting and timelines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
