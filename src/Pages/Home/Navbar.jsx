import { useState } from "react";
import { scroller } from "react-scroll"; // For smooth scrolling
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [activeSection, setActiveSection] = useState("Home"); // Default active link
    const navigate = useNavigate();
    const location = useLocation();

    // Map section names to their corresponding IDs
    const sectionMap = {
        Home: "top",
        Work: "myWork",
        Projects: "myProjects",
    };

    const handleNavClick = (section) => {
        setActiveSection(section); // Update the active section
        if (location.pathname !== "/") {
            navigate("/"); // Navigate to home if not already there
            setTimeout(() => {
                scrollToSection(sectionMap[section]); // Scroll to the correct section
            }, 100); // Small delay to ensure the page has loaded
        } else {
            scrollToSection(sectionMap[section]);
        }
    };

    const scrollToSection = (sectionId) => {
        if (sectionId === "top") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            scroller.scrollTo(sectionId, {
                duration: 500,
                smooth: "easeInOutQuart",
                offset: -50, // Adjust for taskbar height
            });
        }
    };

    return (
        <nav className="taskbar">
            <ul className="taskbar__items">
                {["Home", "Work", "Projects"].map((item) => (
                    <li
                        key={item}
                        className={`taskbar__item ${
                            activeSection === item ? "active" : ""
                        }`}
                        onClick={() => handleNavClick(item)}
                    >
                        {item}
                    </li>
                ))}
                {/* Add a CV link */}
                <li
                    className={`taskbar__item ${
                        activeSection === "CV" ? "active" : ""
                    }`}
                    onClick={() => setActiveSection("CV")}
                >
                    <a
                        href="https://docs.google.com/document/d/18gyxmgY6qInohTQ7kvcbDO9gpY0ftC6X/edit?usp=sharing&ouid=117637253647857405810&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="taskbar__link"
                    >
                        CV
                    </a>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;
