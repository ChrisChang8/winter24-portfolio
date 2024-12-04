import React from 'react';
import './Footer.css'; // Ensure you have a CSS file for styling

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© 2024 Christopher Chang | Created in Plano, Texas</p>
                <p>
                    Built using React. Check out some of my projects on{' '}
                    <a
                        href="https://github.com/ChrisChang8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>.
                </p>
            </div>
        </footer>
    );
}
