import styles from "./Project.module.css";

const Project = ({ img, link, delay }) => {
  return (
    <div data-aos-delay={delay} data-aos="fade-right" className={styles.project}>
      <div className={styles.browser}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={styles.img} />
      </a>
    </div>
  );
};

export default Project;
