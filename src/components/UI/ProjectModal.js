import ReactDOM from "react-dom";
import classes from "./ProjectModal.module.css";
import Card from "./Card";
import Cancel from "./Cancel";
import { motion } from "framer-motion";
import parse from "html-react-parser";
const Backdrop = (props) => {
    const dropIn = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.1
        }
      },
      exit: {
        opacity: 0,
      },
    };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.backdrop}
      onClick={props.onConfirm}
    ></motion.div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.left}>
        <div className={classes.leftWrapper}>
          <h2 className={classes.intro}>{props.description}</h2>
          <h1 className={classes.name}>{props.title}</h1>
          <div className={classes.titleItem}>{props.techno}</div>
          <p className={classes.description}>
           {parse(`${props.summary}`)} 
          </p>
        </div>
      </div>
      <div className={classes.right}>
        <footer className={classes.actions}>
          <Cancel onCancel={props.onConfirm} />
        </footer>
      </div>
    </Card>
  );
};
const ProjectModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          description={props.description}
          techno={props.techno}
          summary = {props.summary}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ProjectModal;
