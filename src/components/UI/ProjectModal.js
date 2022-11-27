import ReactDOM from "react-dom";
import classes from "./ProjectModal.module.css";
import Card from "./Card";
import Cancel from "./Cancel";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.left}>
        <div className={classes.leftWrapper}>
          <h2 className={classes.intro}>Simplify</h2>
          <h1 className={classes.name}>HTML / CSS / JavaSript</h1>
          <div className={classes.titleItem}>Web Developer</div>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            posuere orci sit amet felis ultrices facilisis. Mauris a lobortis
            nunc, ut volutpat arcu. In at blandit nulla. Sed tortor lorem,
            auctor sit amet ante id, accumsan tempor velit. Praesent non commodo
            justo. Suspendisse vel ipsum hendrerit, pharetra tellus et, porta
            eros. Phasellus porta urna nec sem elementum, quis ullamcorper nunc
            imperdiet. Curabitur auctor purus faucibus eleifend mattis. Ut vitae
            lectus sed augue mollis posuere et non nisi. Quisque quam quam,
            vulputate vel nunc id, molestie lobortis erat. Aliquam sodales
            commodo turpis, ut suscipit nisl tincidunt in. Aenean sit amet leo

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
const ErrorModal = (props) => {
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

export default ErrorModal;
