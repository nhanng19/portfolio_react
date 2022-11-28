import classes from "./Card.module.css";
import { motion } from "framer-motion";
const Card = (props) => {
  const dropIn = {
    hidden: {
      x: "-200vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: "200vh",
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
      className={`${classes.card} ${props.className}`}
    >
      {props.children}
    </motion.div>
  );
};

export default Card;
