import Footer from "./Footer"
import Header from "./Header"
import Signin from "./Singin"
import "./Login.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Login=({cartt})=>{
    const[gmail,setgmail]=useState("")
    const[password,setpassword]=useState("")
    const getuserarr=localStorage.getItem("userdata")
    const history=useNavigate()
    const getgmail=(e)=>{
        setgmail(e.target.value)
    }
    const getpassword=(e)=>{
        setpassword(e.target.value)
    }

    const submit=(event)=>{
         event.preventDefault()
      
      if(!gmail.includes("@gmail.com")){
        alert("enter valid gmail")
      }
       if(getuserarr && getuserarr.length){
        const data=JSON.parse(getuserarr)
        const match=data.filter((el,k)=>{
            return el.gmail === gmail && el.password === password
        })
        console.log(match)
        if(match.length === 0){
            alert("invalid details ")
        }
        else{
            console.log("sucssefully")
            history("/")
             alert("login succesfully")
             setgmail('')
      setpassword('')
        }
      }
    }
    return<>
    <Header cart={cartt}/>
    <div className="form">
        <div className="under">
    <form onSubmit={submit}>
       
        <lable>Gmail</lable><br/>
        <input type="gmail" value={gmail} onChange={getgmail} placeholder="Enter Gmail" required/><br/>
       
        <lable>enter your password</lable><br/>
        <input type="password" value={password} onChange={getpassword} placeholder="Create Password" required/><br/><br/>
        <button className="signinbutton">LogIn</button>
        <p>Create Account <Link to="/Signin">SignIn</Link></p>
    </form>
    </div>
    </div>
    <Footer/>
    </>

}
export default Login