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
      <h2 className="skills__heading">My Technical Skills</h2> 
      <br />
      <p className="skills__text">I am proficient technically in a multitude of languages, frameworks and programmes. Some of which are spotlighted below:</p> 
      <br />
      <div className="spotlight-container">
        <img className="skills__spotlight" src={spotLightLeft} alt="spotlight" />
        <img className="skills__spotlight" src={spotLightRight} alt="spotlight" />
      </div>
      <Carousel/>
    </div>
  )
}

export default Skills