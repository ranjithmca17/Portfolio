import React from "react";
import styles from "./Experience.module.css"; // Import CSS module for styling

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.experienceContainer}>
        <div className={styles.experienceItem}>
          <h3>Full Stack Developer</h3>
          <p className={styles.company}>Dewwemo Technologies Private Limited, Coimbatore</p>
          <p className={styles.duration}>Feb 2024 - Dec 2024</p>
          <ul className={styles.responsibilities}>
            <li>Developed and launched live projects using the MERN stack.</li>
            <li>Designed responsive UIs with Next.js and Tailwind CSS.</li>
            <li>Built secure backend services with Node.js, Express.js, and MongoDB.</li>
            <li>Integrated RESTful APIs for seamless communication.</li>
            <li>Collaborated in an Agile environment to meet client deadlines.</li>
            <li>Maintained code quality using Git, Jenkins, and Docker.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;