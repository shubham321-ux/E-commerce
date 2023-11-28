import { useState } from "react"
import "./Signin.css"
import Header from "./Header"
import footer from "./Footer"
import Footer from "./Footer"
import { Link, useNavigate } from "react-router-dom"
const Signin=({data,setdata,name,setname,gmail,setgmail,date,setdate,password,setpassword,cartt})=>{
   
    
    const history=useNavigate()

    const getname=(e)=>{
        setname(e.target.value)
    }
    const getgmail=(e)=>{
        setgmail(e.target.value)
    }
    const getdate=(e)=>{
        setdate(e.target.value)
    }
    const getpassword=(e)=>{
        setpassword(e.target.value)
    }
   const submit=async (event)=>{
    event.preventDefault()
   
    console.log(name,date,password,gmail)
    setdata([...data,{name,gmail,date,password}])
    console.log(data)
    const red=()=>{
        alert(" Hellow "+ ""+name)
    }

    // validations
   if(password.length<8){
    alert("hy")
   }
  else if(!gmail.includes("@gmail.com")){
    alert("enter valid gmail")
   }
   else if(password.length < 8){
     alert("check password")
   }
   else{
    setname('')
    setgmail('')
    setdate('')
    setpassword('')
       console.log("data added")
       localStorage.setItem("userdata",JSON.stringify([...data,{name,gmail,date,password}]))
       history("/")
       alert("Account created")

   }
   }
    return<>
    <Header cart={cartt}/>
    <div className="form">
        <div className="under">
    <form onSubmit={submit}>
        <label>Name</label><br/>
        <input type="text" value={name} onChange={getname} placeholder="Enter your name" required/><br/>
        <lable>Gmail</lable><br/>
        <input type="gmail" value={gmail} onChange={getgmail} placeholder="Enter Gmail" required/><br/>
        <lable>Entering Date</lable><br/>
        <input type="date" value={date} onChange={getdate} /><br/>
        <lable>create your password</lable><br/>
        <input type="password" value={password} onChange={getpassword} placeholder="Create Password" required/><br/><br/>
        <button className="signinbutton">submit</button><br/><br/>
        <p>Already have Account <Link to="/Login">Login</Link></p>
    </form>
    </div>
    </div>
    <Footer/>
    </>
}
export default Signin