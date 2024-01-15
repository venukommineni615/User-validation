import Button from "../UI/Button"
import styles from "./DialogBox.module.css"
import Card from "../UI/Card"
const DialogBox=(props)=>{
    return(
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
        </div>
        )
}
export default DialogBox