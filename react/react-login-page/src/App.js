import logo from './logo.svg';
import './App.css';
import {userState, useState} from "react"
import Input from './component/input/input.js';
import Button from './component/button/button.js';
import Form from './component/form/form.js'

function App() {
  const [userForm,setUserForm] = useState({
    userName :"",
    password : ""
  })
  const onValidation = () => {
    if (userForm.userName === "" || userForm.passwrord === "") {
      alert("Please Do Not Leave Blank Space")
    } else {
      if(userForm.password == "ebubekir" && userForm.userName == "ebubekir") {
        alert("Congratulations You've Signed In Successfully")
      } else {
        alert("Entered Information Does Not Match")
      }
    }
  }
  return (
    <div className="App">
    <Form>
      <h2>Login Page</h2>
     <Input type="text" value={userForm.userName} placeholder='Please Enter Your Username' onChange = {(e) => {setUserForm({...userForm, userName: e.target.value})}}></Input>
     <Input type="password" value={userForm.password} placeholder='Please Enter Your Password'  onChange = {(e) => {setUserForm({...userForm, password: e.target.value})}}></Input>
     <Button text="Login" onClick={onValidation} />
     </Form>
    </div>
  );
}

export default App;
