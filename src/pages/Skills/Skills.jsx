import "./Skills.scss";
import TechStack from "../../components/TechStack/TechStack";
import Nav from "../../containers/Nav/Nav"
import { SkillsData } from "../../data/SkillsData";




const Skills = () => {

  const skillJSX = SkillsData.map((skill, index) => {
    return (
        <div key={index}>
          <TechStack image={skill.logo} name={skill.title}/>
        </div>
    )
  })


  return (
    <div>
      <Nav/>
      <br />
      <h1 className="page__heading">My Technical Skills</h1> 
      <p className="page__text">I am proficient technically in a multitude of languages, frameworks and programmes. Some of which are spotlighted below:</p> 
      <br />
        <div className="skills__container">
          {skillJSX}
        </div>
    </div>
  )
}

export default Skills