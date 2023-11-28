import "./Category.css"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
const Category=({cartt})=>{
    return<>
<Header cart={cartt}/>
<div className="category">
    <div className="three">
        <div className="men">
            <Link to="/Product"><img src="https://img.freepik.com/free-photo/positive-brunet-man-with-crossed-arms_1187-5797.jpg?size=626&ext=jpg&ga=GA1.1.495288115.1690088264&semt=ais" /></Link>
            
            <h2>MEN</h2>
        </div>
        <div className="women">
        <Link to="/Womwn"><img src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=600" /></Link>
        <h2>WOMEN</h2>
        </div>
        <div className="kids">
        <Link to="/Kids"><img src="https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-126789.jpg?size=626&ext=jpg&ga=GA1.1.495288115.1690088264&semt=ais" /></Link>
        <h2>KIDS</h2>
        </div>
    </div>
</div>
<Footer/>
    </>

}
export default Category