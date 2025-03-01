// import styles from './ProjectsStyles.module.css';
// import viberr from '../../assets/viberr.png';
// import freshBurger from '../../assets/fresh-burger.png';
// import hipsster from '../../assets/hipsster.png';
// import fitLift from '../../assets/fitlift.png';
// import ProjectCard from '../../common/ProjectCard';


// function Projects() {
//   return (
//     <section id="projects" className={styles.container}>
//       <h1 className="sectionTitle">Projects</h1>
//       <div className={styles.projectsContainer}>
//         <ProjectCard
//           src={viberr}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="Viberr"
//           p="Streaming App"
//         />
//         <ProjectCard
//           src={freshBurger}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="Fresh Burger"
//           p="Hamburger Restaurant"
//         />
//         <ProjectCard
//           src={hipsster}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="Hipsster"
//           p="Glasses Shop"
//         />
//         <ProjectCard
//           src={fitLift}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="FitLift"
//           p="Fitness App"
//         />
//            <ProjectCard
//           src={viberr}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="Viberr"
//           p="Streaming App"
//         />
//         <ProjectCard
//           src={freshBurger}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="Fresh Burger"
//           p="Hamburger Restaurant"
//         />
//         <ProjectCard
//           src={hipsster}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="Hipsster"
//           p="Glasses Shop"
//         />
//         <ProjectCard
//           src={fitLift}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="FitLift"
//           p="Fitness App"
//         />
//       </div>
//     </section>
//   );
// }

// export default Projects;







import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          liveLink="https://viberr-live-demo.com"
          githubLink="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          liveLink="https://fresh-burger-live-demo.com"
          githubLink="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          liveLink="https://hipsster-live-demo.com"
          githubLink="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          liveLink="https://fitlift-live-demo.com"
          githubLink="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;