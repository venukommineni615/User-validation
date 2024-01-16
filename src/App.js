import './App.css';
import DialogBox from './components/Dialog-box/DialogBox';
import InputForm from './components/Input-components/InputForm';
import UserList from './components/Input-components/UserList';
import {useState} from "react"
function App() {
const [userDetails,setUserDetails]=useState([])
const[modal,setModal]=useState({toggle:false,
msg:''})
const toggleModal=(errMsg)=>{
  setModal((prev)=>{
    return {toggle:!prev.toggle,
    msg:errMsg}
  })
}
const addUser=(username,age,college)=>{
  let user={
    username,
    age,
    college,
    id:Math.random()
  }
  setUserDetails((prev)=>{
    return [...prev,user]
  })
}
  return (
    <div className="App">
      {modal.toggle && <DialogBox switch={toggleModal} msg={modal.msg}></DialogBox>}
      <InputForm addUser={addUser} switch={toggleModal}></InputForm>
      <UserList list={userDetails}></UserList>
    </div>
  );
}

export default App;
