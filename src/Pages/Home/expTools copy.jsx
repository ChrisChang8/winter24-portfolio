import './expTools.css';

export default function ExpTools() {
    return (
        <section id="myTools" className="skills-experience-section">
            <div className="container">
                <div className="skills-section">
                    <h2 className="section-title">Tools</h2>
                    <div className="skills-icons">
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" />
                            <p>Andaconda</p>
                        </div>
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
                <h2 className="section-title">Latest Work</h2>
                    <div className="timeline">

                        <div className="timeline-item white-timeline">
                            <div className="timeline-content">
                                <h3>AI Software Engineer Intern</h3>
                                <p className="position">MeshTek | 8/24 – 12/24</p>
                                <ul className="description">
                                    <li>Built a Generative AI model with Text-To-Speech for an Android application.</li>
                                    <li>Improved user speech error detection by 21.3% &  model accuracy to 95.4%.</li>
                                    <li>Streamlined data flow by writing and filtering 100+ JSON files.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-item ">
                            <div className="timeline-content">
                                <h3>Lead Coding Instructor</h3>
                                <p className="position">Youth Tech Inc. | 5/24 – 8/24</p>
                                <ul className="description">
                                    <li>Taught web development (HTML, CSS, C++).</li>
                                    <li>Led game design projects using Python/Java with 50+ assets.</li>
                                    <li>Mentored 100+ students in robotics, programming, and autonomous navigation.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-item ">
                            <div className="timeline-content">
                                <h3>Data Analyst</h3>
                                <p className="position">Buckingham Court Apartments | 3/23 – 8/23</p>
                                <ul className="description">
                                    <li>Automated tenant rent rolls and expense reports, saving 100+ hours/month.</li>
                                    <li>Forecasted repair costs, cutting expenses by 4%.</li>
                                    <li>Optimized financial models for better forecasting and timelines.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
