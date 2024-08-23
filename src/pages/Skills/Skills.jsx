import "./Skills.scss";
import Carousel from "../../components/Carousel/Carousel";
import Nav from "../../containers/Nav/Nav"




const Skills = () => {



  return (
    <div>
      <Nav/>
      <br />
      <h1 className="page__heading">My Technical Skills</h1> 
      <p className="page__text">I am proficient technically in a multitude of languages, frameworks and programmes. Some of which are spotlighted below:</p> 
      <br />
        <Carousel/>      
    </div>
  )
}

export default Skills