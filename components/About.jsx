import CardStyle from "../styles/CardStyle"
import gardening2 from '../src/assets/gardening2.jpg'

function About(){

    return(
        <CardStyle>
        <>
         <div className="about-container" >
        <div className="about-container">
            
            <div className="about-info">
            <h1>About</h1>
        <p>Best gardening option</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum recusandae eos perferendis culpa magnam provident ut laboriosam, doloremque officia tempore consequuntur, accusantium quos quaerat dolorem nisi, veniam aspernatur adipisci.</p>
        <p>Etiam leo lectus, feugiat a molestie non, volutpat at massa. Ut convallis malesuada mauris, iaculis condimentum metus lacinia sit amet. Vestibulum feugiat, orci eget mattis mattis, risus augue mollis turpis, ut sodales dolor leo vitae massa. Sed tristique rutrum sapien id finibus. Etiam sed nisi mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sollicitudin quam eu orci maximus, ac dignissim ante sodales. Integer sodales aliquam nunc, at lacinia nisl laoreet eu. Donec a turpis ullamcorper, posuere enim sit amet, sagittis ipsum. Mauris eget imperdiet urna. Etiam in orci massa. Pellentesque et libero elementum dui porttitor sodales. Cras iaculis, odio vel pharetra commodo, odio mauris tempus erat, sed iaculis tortor risus in velit.</p>
        </div>
        <img className="about-pic" src={gardening2} />
        </div>
        
        </div>
        
        </>
        </CardStyle>
    )
}

export default About