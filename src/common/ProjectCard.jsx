// import React from 'react';

// function ProjectCard({ src, link, h3, p }) {
//   return (
//     <a href={link} target="_blank">
//       <img className="hover" src={src} alt={`${h3} logo`} />
//       <h3>{h3}</h3>
//       <p>{p}</p>
//     </a>
//   );
// }

// export default ProjectCard;



import React from 'react';
import styles from './ProjectCard.module.css'; // Import CSS module for styling

function ProjectCard({ src, liveLink, githubLink, h3, p }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={src} alt={`${h3} logo`} />
      <div className={styles.content}>
        <h3>{h3}</h3>
        <p>{p}</p>
        <div className={styles.links}>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;