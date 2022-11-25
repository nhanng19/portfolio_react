import styles from "./Modal.module.css"

const Modal = () => {
    return (
        <div className= {styles.modal}>
            <div className={styles.left}>left</div>
            <div className= {styles.right}>right</div>
        </div>
    )
}

export default Modal;