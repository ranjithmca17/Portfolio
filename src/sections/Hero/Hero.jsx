// import styles from './HeroStyles.module.css';
// import heroImg from '../../assets/Design uten navn.png';
// import sun from '../../assets/sun.svg';
// import moon from '../../assets/moon.svg';
// import twitterLight from '../../assets/twitter-light.svg';
// import twitterDark from '../../assets/twitter-dark.svg';
// import githubLight from '../../assets/github-light.svg';
// import githubDark from '../../assets/github-dark.svg';
// import linkedinLight from '../../assets/linkedin-light.svg';
// import linkedinDark from '../../assets/linkedin-dark.svg';
// import whatsappLight from '../../assets/whatsapp-light.svg';
// import whatsappDark from '../../assets/whatsapp-dark.svg';
// import CV from "../../assets/CV-Ranjith.pdf";
// import Typewriter from "typewriter-effect";
// import { useTheme } from '../../common/ThemeContext';

// function Hero() {
//   const { theme, toggleTheme } = useTheme();

//   const themeIcon = theme === 'light' ? sun : moon;
//   const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
//   const githubIcon = theme === 'light' ? githubLight : githubDark;
//   const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
//   const whatsappIcon = theme === 'light' ? whatsappLight : whatsappDark;

//   return (
//     <section id="hero" className={styles.container}>
//       <div className={styles.colorModeContainer}>
//         <img
//           src={heroImg}
//           className={styles.hero}
//           alt="Profile picture of Ranjith S"
//         />
//         <img
//           className={styles.colorMode}
//           src={themeIcon}
//           alt="Color mode icon"
//           onClick={toggleTheme}
//         />
//       </div>
//       <div className={styles.info}>
//         <h1>Ranjith S</h1>
//         <h2>
//         <Typewriter
//         options={{
//           strings: [
//             "Front-end Developer",
//             "Backend Developer",
//             "Full Stack Developer",
//           ],
//           autoStart: true,
//           loop: true,
//         }}
//       /> 
//         </h2>
//         <span>
//           <a href="https://wa.me/9003558391" target="_blank">
//             <img src={whatsappIcon} alt="WhatsApp icon" />
//           </a>
//           <a href="https://twitter.com/" target="_blank">
//             <img src={twitterIcon} alt="Twitter icon" />
//           </a>
//           <a href="https://github.com/" target="_blank">
//             <img src={githubIcon} alt="Github icon" />
//           </a>
//           <a href="https://linkedin.com/" target="_blank">
//             <img src={linkedinIcon} alt="Linkedin icon" />
//           </a>
//         </span>
//         <p className={styles.description}>
//           Expert in React, Next.js, Node.js, Express.js, and MongoDB, building scalable,
//           secure, and high-performance web apps with modern UI/UX and responsive design.
//           Experienced in WordPress, WooCommerce, and Git for versatile web solutions.
//         </p>
//         <a href={CV} download>
//           <button className="hover">Resume</button>
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Hero;









import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import whatsappLight from '../../assets/whatsapp-light.svg';
import whatsappDark from '../../assets/whatsapp-dark.svg';
import CV from "../../assets/CV-Ranjith.pdf";
import Typewriter from "typewriter-effect";
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const whatsappIcon = theme === 'light' ? whatsappLight : whatsappDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Ranjith S"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Ranjith S</h1>
        <h2>
          <Typewriter
            options={{
              strings: [
                "Front-end Developer",
                "Backend Developer",
                "Full Stack Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: "", // Remove the cursor
            }}
          />
        </h2>
        <span>
          <a href="https://wa.me/9003558391" target="_blank">
            <img src={whatsappIcon} alt="WhatsApp icon" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Expert in React, Next.js, Node.js, Express.js, and MongoDB, building scalable,
          secure, and high-performance web apps with modern UI/UX and responsive design.
          Experienced in WordPress, WooCommerce, and Git for versatile web solutions.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;