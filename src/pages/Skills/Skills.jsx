import "./Skills.scss";
import Carousel from "../../components/Carousel/Carousel";
import Nav from "../../containers/Nav/Nav"
import spotLightLeft from "../../images/svgs/spotlight-svgrepo-com (L-R).svg";
import spotLightRight from "../../images/svgs/spotlight-svgrepo-com (R-L).svg";



const Skills = () => {



  return (
    <div>
      <Nav/>
      <br />
      <h1 className="page__heading">My Technical Skills</h1> 
      <p className="page__text">I am proficient technically in a multitude of languages, frameworks and programmes. Some of which are spotlighted below:</p> 
      <br />
      
      
      {/* <div className="spotlight-container">
        <img className="skills__spotlight" src={spotLightLeft} alt="spotlight" />
        <img className="skills__spotlight" src={spotLightRight} alt="spotlight" />
      </div> */}
      <div className="carousel__container">
        <Carousel/>
      </div>
      
    </div>
  )
}

export default Skills