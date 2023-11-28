import "./Footer.css"
import { Link } from "react-router-dom"
const Footer=()=>{
    return<>
    <div className="footermain">
        <div className="detail">
            <div className="shop">
                <h3>SHOP</h3>
               <Link to="/Product"> <p>Men</p></Link>
                <Link to="/Womwn"><p>Women</p></Link>
               <Link to="/Kids"><p>Kids</p></Link>
                
            </div>
            <div className="help">
                <h3>HELP</h3>
                <Link to="/Contact"><p>Contact us</p></Link>
                <p>FAQ</p>
                <p>Accessibility</p>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>Our Story </p>
                <p>Wholesale</p>
                <p>Careers</p>
                
            </div>
            <div className="signin">
                <h4>Sign up to get 10% off your first order</h4>
                <input type="gmail" placeholder="enter gmail"/> <button className="footerbtn">Subscribe</button>
            </div>
        </div>
    </div>
    </>
}
export default Footer