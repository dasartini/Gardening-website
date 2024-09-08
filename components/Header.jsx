import Navigation from "../styles/Navigation"

function Header(){

    return (<Navigation>
    <div className="nav">
        <input type="checkbox"/>
       
          <span></span>
          <span></span>
          <div className="menu">
  
            <li><a href="#">about</a></li>
            <li><a href="#">testimonials</a></li>
            <li><a href="#">enquiry</a></li>
            <li><a href="#">contact</a></li>

          </div>
         
      </div>
      
      </Navigation>)
}

export default Header