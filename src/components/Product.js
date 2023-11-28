import Footer from "./Footer"
import Header from "./Header"
import "./Product.css"
import { items } from "./Productdata"
import Signin from "./Singin.js"
import { setdata } from "./Singin.js"
const Product=({items,cartt,setcartt,data,setdata})=>{
    const addtocartt =(id,price,title,description,imgsrc)=>{
        setcartt([...cartt,{id,price,title,description,imgsrc}])
        console.log(cartt)
       
        setdata([...data,...cartt,{id,price,title,description,imgsrc}])
           

    }
    return<>
    <Header cart={cartt}/>
<div className="productlist">
    {
        items.map((e)=>{
            return<>
            <div className="productdetaill">
                <img src={e.imgsrc}/>
                <h5 className="head">{e.title}</h5>
                <p className="p">{e.description}</p>
                <button className="productbtn">{e.price}</button><br/>
                <button onClick={()=>addtocartt(e.id,e.price,e.title,e.description,e.imgsrc)} className="productcart">Add Cart</button>
            </div>
            </>
        })
    }
</div>

<Footer/>
    </>
}
export default Product