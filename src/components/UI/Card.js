import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div data-aos="slide-left" className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
