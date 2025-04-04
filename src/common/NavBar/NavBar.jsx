import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Icons for menu open/close
import styles from "./Navbar.module.css"; // Import CSS module for styling
import { useTheme } from "../ThemeContext"; // Assuming you have a theme context
import sun from "../../assets/sun.svg"; // Light theme icon
import moon from "../../assets/moon.svg"; // Dark theme icon

function Navbar() {
  const { theme, toggleTheme } = useTheme(); // Get the current theme and toggle function
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [activeLink, setActiveLink] = useState("home"); // State for active link

  const themeIcon = theme === "light" ? sun : moon; // Set the theme icon

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu on mobile
  };

  return (
    <nav className={`${styles.navbar} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className={styles.logo}
          onClick={() => handleLinkClick("home")}
        >
          RS
        </Link>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className={activeLink === "home" ? styles.active : ""}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={activeLink === "projects" ? styles.active : ""}
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className={activeLink === "skills" ? styles.active : ""}
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className={activeLink === "experience" ? styles.active : ""}
              onClick={() => handleLinkClick("experience")}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className={activeLink === "education" ? styles.active : ""}
              onClick={() => handleLinkClick("education")}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              className={activeLink === "certifications" ? styles.active : ""}
              onClick={() => handleLinkClick("certifications")}
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={activeLink === "contact" ? styles.active : ""}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <button className={styles.themeToggle} onClick={toggleTheme}>
          <img src={themeIcon} alt="Theme Toggle" />
        </button>

        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;