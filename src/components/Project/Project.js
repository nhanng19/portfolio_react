
import styles from "./Project.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ProjectModal";
import { projects } from "../../data.js";
const Project = ({ img, link, delay }) => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(false)
  }
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
      {modal && <ErrorModal message={link} onConfirm={modalHandler} />}
    </>
  );
};

export default Project;
