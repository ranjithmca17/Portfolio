import React from "react";
import styles from "./Certifications.module.css"; // Import CSS module for styling

const Certifications = () => {
  return (
    <section id="certifications" className={styles.container}>
      <h2 className={styles.sectionTitle}>Certifications</h2>
      <div className={styles.certificationsContainer}>
        <div className={styles.certificationItem}>
          <h3>MERN Stack Certification</h3>
          <p className={styles.issuer}>Vebbox Software Solutions, Kumbakonam</p>
          <p className={styles.duration}>June 2023 - Jan 2024</p>
          <ul className={styles.details}>
            <li>Hands-on experience in React.js, Node.js, Express.js, and MongoDB.</li>
            <li>Developed and deployed eCommerce platforms and business websites.</li>
            <li>Strengthened logical thinking and problem-solving skills.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;