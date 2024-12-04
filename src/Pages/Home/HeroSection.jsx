import React, { useState, useEffect } from 'react';
import './HeroSection.css';

export default function HeroSection() {

    const [currentWord, setCurrentWord] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(50); // Typing speed in ms
    const words = ['FULL STACK, MACHINE LEARNING, and CLOUD COMPUTING.'];

    useEffect(() => {
        const current = words[0]; // Only one word to type
        if (typingIndex < current.length) {
            const timer = setTimeout(() => {
                setCurrentWord(current.substring(0, typingIndex + 1));
                setTypingIndex(typingIndex + 1);
            }, typingSpeed);

            return () => clearTimeout(timer); // Cleanup timeout on component unmount
        }
    }, [typingIndex, typingSpeed, words]);

    return (
        <section>
            {/* Hero Section */}
            <section
                id="heroSection"
                className="hero--section"
                style={{ paddingTop: '125px' }}
            >
                <div className="container">
                    <div className="hero--section--content">
                        {/* Title Row */}
                        <div className="title-row">
                            <h2>
                                <span className="hero--section--title--color">
                                    Christopher Chang
                                </span>
                            </h2>
                            <div>
                                {/* Social Icons */}
                                <div className="social-icons">
                                    <a
                                        href="https://github.com/ChrisChang8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="icon"
                                        >
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.59-4.04-1.59-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.08 1.86 1.26 1.86 1.26 1.08 1.86 2.82 1.32 3.5 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0 1 12 5.62a11.4 11.4 0 0 1 3.02.41c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.85.12 3.15.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.6-5.48 5.89.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/ccchang2003/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="icon"
                                        >
                                            <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.34 20.19H4.24V9.03h3.1v11.16zM5.79 7.86a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76zM20 20.19h-3.1v-5.56c0-1.33-.02-3.04-1.86-3.04-1.87 0-2.16 1.46-2.16 2.96v5.63H10v-11h2.97v1.5h.04c.41-.76 1.41-1.56 2.9-1.56 3.11 0 3.68 2.04 3.68 4.7v6.36z" />
                                        </svg>
                                    </a>
                                    <a href="mailto:changchristopher8@gmail.com">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="icon"
                                        >
                                            <path d="M20 4H4c-1.11 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.66-7.07 4.43c-.39.25-.9.25-1.28 0L4 8.66V6l8 5 8-5v2.66z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="location">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="pin-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 4.27-6.25 11.25-6.25 11.25S5.75 12.77 5.75 8.5c0-3.45 2.8-6.25 6.25-6.25z"
                                />
                                <circle cx="12" cy="8.5" r="2.5" />
                            </svg>
                            <span>Plano, Texas</span>
                        </div>
                        {/* Hero Description */}
                        <p className="hero--section--description" style={{ marginTop: '10px' }}>
                        I'm a 21-year-old developer with 5 years of experience, 
                        graduating in May 2026 with a Computer Science bachelor's from UT Dallas.
                        </p>
                        <p className="hero--section--description" style={{ marginTop: '10px' }}>
                            I specialize in... <span className="typing-effect">{currentWord}</span>
                            <span className="cursor">|</span>
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}
