import Button from "../UI/Button"
import styles from "./DialogBox.module.css"
import Card from "../UI/Card"
import ReactDOM  from "react-dom"
const DialogBox=(props)=>{
    return ReactDOM.createPortal(
        <div className={styles.container}>
        <div className={styles.dialogBackground}></div>
            <div className={styles.dialog}>
                <Card className={styles.mycard}>
                    <h2 className={styles.heading}>Error</h2>
                    <p className={styles.text}>{props.msg} </p>
                    <div className={styles.buttonContainer}>
                    <Button className={styles.mybutton} click={props.switch}>Ok</Button>
                    </div>
                </Card>
            </div>
        </div>,
        document.getElementById("modal-root")
        )
}
export default DialogBox