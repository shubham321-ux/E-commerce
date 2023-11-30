import React from "react"
import "./Home.css"
import Header from "C:/Users/HP/Desktop/E-commerce/buy/src/components/Header.js"
import Footer from "C:/Users/HP/Desktop/E-commerce/buy/src/components/Footer.js"
import { Link } from "react-router-dom"
const Home=({cartt})=>{
  
  return <>
  <Header cart={cartt}/>
  <div className="main">
    <div className="maincontent">
      <h4 className="heading">Discover Our Cloth Collection</h4>
      <p className="para">Fashion is a from self-expression .So don't miss an opportunity to amplitfy your look with latest collection </p>
      <Link to="/Product"><button className="btn">Shp Now</button></Link>
    </div>
    <div className="mainimage">
      <img src="data:image/jpeg;base64,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"/>
    </div>

  </div><br/>
  <Footer/>
  
  </>
}
export default Home