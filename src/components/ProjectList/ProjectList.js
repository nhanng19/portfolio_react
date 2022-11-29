import styles from "./ProjectList.module.css";
import Project from "../Project/Project";
import { projects } from "../../data.js";

const ProjectList = () => {
  return (
    <div id="project" className={styles.projectList}>
      <div className={styles.texts}>
        <h1 data-aos="fade-right" className={styles.title}>
          Check out my latest work
        </h1>
        <p data-aos="fade-right" className={styles.description}>
          Select one of my projects to learn more.
        </p>
      </div>

      <div className={styles.list}>
          {projects.map((project) => (
            <Project
              key={project.id}
              img={project.img}
              link={project.link}
              source={project.source}
              delay={project.delay}
              title={project.title}
              techno={project.techno}
              description={project.description}
              summary = {project.summary}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectList;
