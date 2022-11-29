import ReactDOM from "react-dom";
import classes from "./ThankYou.module.css";
import { motion } from "framer-motion";
const Backdrop = (props) => {
 const dropIn = {
   hidden: {
     opacity: 0,
   },
   visible: {
     opacity: 1,
     transition: {
       duration: 0.1,
     },
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
    const dropIn = {
      hidden: {
        y: "-100vh",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      },
      exit: {
        y: "100vh",
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
    };

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.modal}
    >
      <div className={classes.content}>
        <p>
          Thank you for reaching out! I'll get back to you as soon as possible.
        </p>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onConfirm}>Go back</button>
      </footer>
    </motion.div>
  );
};
const ThankYou = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ThankYou;
