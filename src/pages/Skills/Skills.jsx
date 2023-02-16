import Nav from "../../containers/Nav/Nav"
import spotLight from "../../images/svgs/spotlight-svgrepo-com (L-R).svg";
import html from "../../images/svgs/html-5-svgrepo-com.svg";
import htmlBlack from "../../images/svgs/html5-svgrepo-com (black).svg";



const Skills = () => {

  const skillsArr = [
    {
      title: "Git",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "HTML5",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "CSS3",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "SCSS",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "JavaScript",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "React",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "Java",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "Spring Boot",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "MySQL",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "Firebase",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
    {
      title: "Python",
      logo: html,
      altImage: htmlBlack,
      description: ""
    },
  ]


  return (
    <div>
      <Nav/>
      <img src={spotLight} alt="" />
      <h2>{skillsArr[0].title}</h2>
      <img src={skillsArr[0].logo} alt="" />
      <img src={skillsArr[0].altImage} alt=""/>
    </div>
  )
}

export default Skills