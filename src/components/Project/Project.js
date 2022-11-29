import styles from "./Project.module.css";
import { useState } from "react";
import ProjectModal from "../UI/ProjectModal";
import { AnimatePresence } from "framer-motion";

const Project = ({ img, link, delay, title, techno, description, summary, source }) => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(false);
  };
  return (
    <>
      <div
        data-aos-delay={delay}
        data-aos="fade-right"
        className={styles.project}
      >
        <div className={styles.browser}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
        <img
          onClick={() => {
            setModal(true);
          }}
          src={img}
          alt=""
          className={styles.img}
        />
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modal && (
          <ProjectModal
            title={title}
            techno={techno}
            description={description}
            summary={summary}
            link={link}
            source={source}
            img={img}
            onConfirm={modalHandler}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
