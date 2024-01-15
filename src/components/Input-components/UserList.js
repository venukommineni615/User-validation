import Card from "../UI/Card"
import styles from "./UserList.module.css"
const UserList=(props)=>{
    if(props.list.length===0){
        return
    }
return(
    <Card className={styles.card}>
        <ul>
            {props.list.map((ele)=>{
                return (<li key={ele.id}>{ele.username} ({
                    ele.age
                } years)</li>)
            })}
        </ul>
    </Card>
)
}
export default UserList