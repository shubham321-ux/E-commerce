import { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom";
const Header=({cart})=>{
    const [openmenu,setopenmenu]=useState(false);
    return<>
    <div className="headermain">
        <h1>STYLE.io</h1>
        <div className="items">
            <Link to="/">Home</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Category">Category</Link>
            <Link to="/Contact">Contact</Link> 
        </div>
        <Link to="/Signin"><button className="signinbtn">Sing In</button></Link>
       <Link to="/Cart" ><img className="cart"  src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x1842-etrk1yv6.png" /></Link>
        <img className="menu" onClick={()=>{
            setopenmenu(!openmenu)
        }} src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg"/>

        <ul className={openmenu ? "open":""}>
        <Link to="/">Home</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Category">Category</Link>
            <Link to="/Contact">Contact</Link> 
            <Link to="/Signin"><button className="signinbtn">Sing In</button></Link>
        </ul>
        <span className="reddot">{cart.length}</span>

    </div>
    </>
}
export default Header
