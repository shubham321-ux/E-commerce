import "./Cart.css"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
const Cart=({cartt,setcartt})=>{
  const local=localStorage.getItem("userdata")
 
    return<>
    <Header cart={cartt}/>
      <div className="cartitems">
        
        {
          cartt.length === 0?(
            <div className="length0">
              <h1 className="headingcart">Your Crat is Empty</h1>
              <Link to="/Category"><button className="continou">Let's Shop</button></Link>
              </div>
          ):
          cartt.map((e)=>{
            return<>
            <div className="cartitemdetail">
           <div className="imgsection"> <img src={e.imgsrc}/></div>
           <div className="detailsection">
               <h3 className="h3">{e.title} </h3>
               <p className="des">{e.description}</p>
               </div>
             <div className="buttons"> 
              <button className="red">{e.price}</button>
              <button className="red2">Buy Now</button>
           </div>
          
           </div>
            </>
          })
          
        
         }
          {
        cartt.length!=0 &&(
          <div className="clear">
          <Link className="green" to="/Category"><button className="check">Add items</button></Link>
          <button onClick={()=>setcartt("")} className="remove">Clear</button>
         </div>
         
        )
       }
         
         
      </div>
      
      <Footer/>
    </>

}
export default Cart