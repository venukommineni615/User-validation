import Button from "../UI/Button"
import Card from "../UI/Card.js"
import styles from "./InputForm.module.css"
import { useState } from "react"
const InputForm=(props)=>{
    const [user,setUser]=useState('')
    const [age,setAge]=useState('')
    const [college,setCollege]=useState('')
    const addUser=(event)=>{
        event.preventDefault()
        if(user.length===0 || age.length===0 || college.length===0){
            props.switch("Please enter the details")
            return
        }
        else if(+age<1){
            props.switch("age should be greater than zero")
            return
        }
        props.addUser(user,age,college)
        setUser('')
        setAge('')
        setCollege('')

    }
    const userChange=(event)=>{
        setUser(event.target.value)
    }
    const ageChange=(event)=>{
        setAge(event.target.value)
    }
    const collegeChange=(event)=>{
        setCollege(event.target.value)
    }

    
return(
    <Card>
        <form onSubmit={addUser}>
            <div className={styles.username}>
                <label htmlFor='username'>Enter your name:</label>
                <input value={user} id="username" type="text" className={styles.input} onChange={userChange}></input>
            </div>
            <div className={styles.age}>
                <label htmlFor='age'>Age:</label>
                <input value={age} id="age" type="number" className={styles.input} onChange={ageChange}></input>
            </div>
            <div className={styles.college}>
                <label htmlFor='college'>College:</label>
                <input value={college} id="college" type="text" className={styles.input} onChange={collegeChange}></input>
            </div>
            <Button type='submit' >Submit</Button>
        </form>
    </Card>
)
}
export default InputForm