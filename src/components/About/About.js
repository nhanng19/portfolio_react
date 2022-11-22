import styles from "./About.module.css";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faEnvira,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <div id = "about" className={styles.about}>
      <div data-aos="fade-left" className={styles.left}>
        <div className={styles.cube}>
          <div className={styles.box + " " + styles.box1}>
            <FontAwesomeIcon icon={faEnvira} color="#DD0031" />
          </div>

          <div className={styles.box + " " + styles.box2}>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>

          <div className={styles.box + " " + styles.box3}>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>

          <div className={styles.box + " " + styles.box4}>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>

          <div className={styles.box + " " + styles.box5}>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>

          <div className={styles.box + " " + styles.box6}>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
      <div data-aos="fade-right" className={styles.right}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.sub}>
          Hey there, my name is Nhan and I am a Full Stack Developer.
        </p>
        <p className={styles.description}>
          I have always had an affinity for technologies and the arts at a young
          age, a chemistry I gratefully utilize today as a developer. I have a serious passion for creating 
        </p>
      </div>
    </div>
  );
};

export default About;
