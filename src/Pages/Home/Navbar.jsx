import { useState, useEffect } from "react";
import { scroller } from "react-scroll"; // Use scroller for programmatic scrolling
import { useNavigate, useLocation } from "react-router-dom"; // For navigation and current location
import './Navbar.css';

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    const handleNavClick = (toSection) => {
        if (location.pathname !== "/") {
            navigate("/"); // Navigate to Home page first
            setTimeout(() => {
                scrollToSection(toSection); // Scroll to section after navigation
            }, 100); // Delay to ensure the page has loaded
        } else {
            scrollToSection(toSection); // Scroll to section directly if already on Home
        }
        closeMenu();
    };

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 500,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -70, // Adjust for navbar height
        });
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <button
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
                aria-label="Toggle navigation menu"
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </button>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <span
                            className="navbar--content"
                            onClick={() => handleNavClick("heroSection")}
                        >
                            Home
                        </span>
                    </li>
                    <li>
                        <span
                            className="navbar--content"
                            onClick={() => handleNavClick("myTools")}
                        >
                            Tools
                        </span>
                    </li>
                    <li>
                        <span
                            className="navbar--content"
                            onClick={() => handleNavClick("myExp")}
                        >
                            Experiences
                        </span>
                    </li>
                    <li>
                        <span
                            className="navbar--content"
                            onClick={() => (window.location.href = "/allProjects")}
                        >
                            Projects
                        </span>
                    </li>
                    <li>
                        <a
                            href="mailto:christopherchang1688@gmail.com"
                            className="navbar--content"
                            onClick={closeMenu}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
