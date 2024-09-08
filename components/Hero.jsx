import HeroStyle from "../styles/HeroStyle"
import profilePic from '../styles/assets/profile.avif'

function Hero(){

    return (
        <HeroStyle>
      
        <div className="image-container" id="gardening">
        <div className="info-container">
            <img className="profile-pic" src={profilePic}/>
            <div className="info">
            <h2>Sanjay Gordon: resourceful Garden</h2>
        <p>Best gardening option</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum recusandae eos perferendis culpa magnam provident ut laboriosam, doloremque officia tempore consequuntur, accusantium quos quaerat dolorem nisi, veniam aspernatur adipisci.</p>
        <button> BOOK NOW</button>
        </div>
        
        </div>
        
        </div>

        </HeroStyle>
        
    )
}

export default Hero