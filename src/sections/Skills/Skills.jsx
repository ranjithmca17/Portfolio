// import styles from './SkillsStyles.module.css';
// import checkMarkIconDark from '../../assets/checkmark-dark.svg';
// import checkMarkIconLight from '../../assets/checkmark-light.svg';
// import SkillList from '../../common/SkillList';
// import { useTheme } from '../../common/ThemeContext';

// function Skills() {
//   const { theme } = useTheme();
//   const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

//   return (
//     <section id="skills" className={styles.container}>
//       <h1 className="sectionTitle">Skills</h1>
//       <div className={styles.skillList}>
//         <SkillList src={checkMarkIcon} skill="HTML" />
//         <SkillList src={checkMarkIcon} skill="CSS" />
//         <SkillList src={checkMarkIcon} skill="JavaScript" />
//         <SkillList src={checkMarkIcon} skill="TypeScript" />
//         <SkillList src={checkMarkIcon} skill="Node" />
//       </div>
//       <hr />
//       <div className={styles.skillList}>
//         <SkillList src={checkMarkIcon} skill="React" />
//         <SkillList src={checkMarkIcon} skill="Angular" />
//         <SkillList src={checkMarkIcon} skill="Vue" />
//         <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
//       </div>
//       <hr />
//       <div className={styles.skillList}>
//         <SkillList src={checkMarkIcon} skill="Redux" />
//         <SkillList src={checkMarkIcon} skill="Webpack" />
//         <SkillList src={checkMarkIcon} skill="Git" />
//         <SkillList src={checkMarkIcon} skill="Jest" />
//         <SkillList src={checkMarkIcon} skill="Bootstrap" />
//       </div>
//     </section>
//   );
// }

// export default Skills;










import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React Js" />
        <SkillList src={checkMarkIcon} skill="NodeJs" />
        <SkillList src={checkMarkIcon} skill="Express Js" />
        <SkillList src={checkMarkIcon} skill="MongoDb" />
        <SkillList src={checkMarkIcon} skill="MySql" />
      </div>
      <hr />
      <h1 className="sectionTitle">Tools</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="WordPress" />
        <SkillList src={checkMarkIcon} skill="WooCommerce" />
        <SkillList src={checkMarkIcon} skill="Shopify" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Jenkins Pipelines" />
      </div>
    </section>
  );
}

export default Skills;
