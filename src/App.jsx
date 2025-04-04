// import './App.css';
// import BubbleAnimation from './common/Mouse';
// // import MouseFollowAnimation from './common/Mouse';
// import Contact from './sections/Contact/Contact';
// import Footer from './sections/Footer/Footer';
// import Hero from './sections/Hero/Hero';
// import Projects from './sections/Projects/Projects';
// import Skills from './sections/Skills/Skills';

// function App() {
//   return (
//     <>
//       <Hero />
//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer />
//   <BubbleAnimation/>
//     </>
//   );
// }

// export default App;







import './App.css';
// import BubbleAnimation from './common/Mouse';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
// import { useTheme } from './common/ThemeContext'; // Assuming you have a theme context
import Experience from './common/Experience/Experience';
import Education from './common/Education/Education';
import Certifications from './common/Certifications/Certifications';
import Navbar from './common/NavBar/NavBar';

function App() {
  // const { theme } = useTheme(); // Get the current theme

  return (
    <>
      {/* Bubble animation takes the theme to adjust bubble colors */}
      {/* <BubbleAnimation theme={theme} /> */}
     <Navbar/>
      <Hero />
      <Projects />
      <Skills />
      <Experience/>
  <Education/>
      <Certifications/>
          
      <Contact />
      <Footer />

    </>
  );
}

export default App;
