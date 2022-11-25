import styles from "./Landing.module.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Logo from "../Logo/Logo";
import Mouse from "../UI/Mouse";
import { Link } from "react-scroll";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="landing" className={styles.landing}>
      <div className={styles.left}>
        <div className={styles.leftWrapper}>
          <h2
            data-aos="fade-in"
            data-aos-duration="2000"
            className={styles.intro}
          >
            Hello, My name is
          </h2>
          <Logo />
          <h1
            data-aos="fade-in"
            data-aos-duration="2000"
            className={styles.name}
          >
            Nhan Nguyen
          </h1>
          <p
            data-aos="fade-in"
            data-aos-duration="2000"
            className={styles.description}
          >
            Full Stack Developer
          </p>
        </div>
      </div>
      <Link to="project" spy={true} smooth={true} offset={-30} duration={500}>
        <Mouse />
      </Link>
    </div>
  );
};

export default Landing;
