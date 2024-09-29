import twitter from '../src/assets/x.svg'
import facebook from '../src/assets/facebook.svg'
import instagram from '../src/assets/instagram.svg'
import SocialsStyle from '../styles/SocialsStyle'

function  Socials(){
return(
    <SocialsStyle>
    <div>
        <ul class="socials">
<li><a href="https://www.instagram.com/" target="_blank" class="socials-icon"> <img src={instagram} alt="instagram page"/></a></li>
<li><a href="https://x.com/solana" target="_blank" class="socials-icon"> <img src={twitter} alt="Twitter page"/></a></li>
<li><a href="https://www.facebook.com/" target="_blank" class="socials-icon"> <img src={facebook} alt=""/></a></li>

</ul>
    </div>
    </SocialsStyle>
)

}

export default Socials