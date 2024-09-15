import Navigation from "../styles/Navigation"
import { Link } from "react-router-dom"
function Header(){

    return (<Navigation>
    <div className="nav">
        <input type="checkbox"/>
       
          <span></span>
          <span></span>
          <div className="menu">
 
            <li><a href="#about">about</a></li>
            <li><a href="#home">testimonials</a></li>
            <li><a href="#contact">contact</a></li>

          </div>
         
      </div>
      
      </Navigation>)
}

export default Header