import React from "react";
import styles from "./ProjectsStyles.module.css";
 import Project1 from "../../assets/Project1.png";
 import Project2 from "../../assets/Project2.png";
 import Project3 from "../../assets/Project3.png";
 import Project4 from "../../assets/Project4.png";
 import Project5 from "../../assets/Project5.png";

import ProductCard from "../../common/ProjectCard";
// import ProductCard from "../../common/ProductCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <ProductCard
          src={Project5}
          liveLink="https://ecom-project-ranjith-mca.vercel.app/"
          githubLink="https://github.com/ranjithmca17/EcomProject"
          h3="Ecommerce"
          p="Full stack Project"
          buildBy="Frontend: React.js, Backend: Node.js, Express.js, MongoDB"
        />
        {/* Mern One */}
            <ProductCard
          src={Project4}
          liveLink="https://hipsster-live-demo.com"
          githubLink="https://github.com/Ade-mir/company-landing-page-2"
          h3="Ecommerce"
          p="Full stack Project"
          buildBy="Frontend: React.js, Backend: Node.js, Express.js, MongoDB"
        />
        {/* Hospital Manage ment */}
        <ProductCard
          src={Project3}
          liveLink="https://hospital-an48.onrender.com/"
          githubLink="https://github.com/ranjithmca17/Hospital"
          h3="Hospital management"
          p="Frontend Project"
          buildBy="React.js"
        />

{/* Frontend Ecom */}
<ProductCard
          src={Project2}
          liveLink="https://ecommerce-cpes.onrender.com/"
          githubLink="###"
          h3="Ecommerce"
          p="FrontEnd Project"
          buildBy="React Js"
        />
        {/* Weather App */}
                <ProductCard
          src={Project1}
          liveLink="https://ranjithmca17.github.io/weather/"
          githubLink="https://github.com/ranjithmca17/weather"
          h3="weather app"
          p="Frontend Project"
          buildBy="HTML,CSS,JavaScript with weather app APi"
        />
      </div>
    </section>
  );
}

export default Projects;