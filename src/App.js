import React, { useState } from "react"
import "./App.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from"./components/Home.js"
import { Routes,Route } from "react-router-dom"
import Signin from "./components/Singin.js"
import Login from "./components/Login.js"
import Product from "./components/Product.js"
import Cart from "./components/Cart.js"
import { items } from "./components/Productdata.js"
import { womendata } from "./components/Womendata.js"
import Category from "./components/Category.js"
import Women from "./components/Womwn.js"
import { kidsdata } from "./components/Kidsdata.js"
import Kids from "./components/Kids.js"
const App=()=>{
  const [data,setdata]=useState([...items]);
  const [cartt,setcartt]=useState([]);
  const[datta,setdatta]=useState([])
  const[name,setname]=useState("")
  const[gmail,setgmail]=useState("")
  const[date,setdate]=useState("")
  const[password,setpassword]=useState("")
  const[women,setwomen]=useState([...womendata])
  const[kid,setkid]=useState([...kidsdata])
  return <>

 <Routes>
  
  <Route path="/" element={<Home cartt={cartt}/>}/>
  <Route path="/Signin" element={<Signin cartt={cartt} items={data} data={datta} setdata={setdatta} name={name} setname={setname} gmail={gmail} setgmail={setgmail} date={date} setdate={setdate} password={password} setpassword={setpassword}/>}/>
  <Route path="/Login" element={<Login cartt={cartt}/>}/>
  <Route path="/Product" element={<Product cartt={cartt} setcartt={setcartt} items={data} data={datta} setdata={setdatta} />}/>
  <Route path="/Cart" element={<Cart cartt={cartt} setcartt={setcartt}/>}/>
  <Route path="/Category" element={<Category  cartt={cartt}/>}/>
  <Route path="/Womwn" element={<Women cartt={cartt} setcartt={setcartt} items={women} data={datta} setdata={setdatta} />}/>
  <Route path="/Kids" element={<Kids cartt={cartt} setcartt={setcartt} items={kid} data={datta} setdata={setdatta} />}/>
 </Routes>
 </>
 
}
export default App 