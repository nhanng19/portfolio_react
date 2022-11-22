import styles from "./ProjectList.module.css";
import Project from "../Project/Project";
import { projects } from "../../data.js";

const ProjectList = () => {
  return (
    <div id = "project" className={styles.projectList}>
      <div className={styles.texts}>
        <h1 data-aos="fade-right" className={styles.title}>
          Check out my latest projects
        </h1>
        <p data-aos="fade-right" className={styles.description}>
          Explore my work.
        </p>
      </div>

      <div className={styles.list}>
        {projects.map((project) => (
          <Project
            key={project.id}
            img={project.img}
            link={project.link}
            delay={project.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
