import Nav from "../../containers/Nav/Nav"
import "./BackEnd.scss"
import pageimg from "../../images/pageImages/Profession_-Backend.png"
import {ProjectData} from "../../data/ProjectData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";


const BackEnd = () => {
  
  const beProjectsJSX = ProjectData.backend.map((project, index) => {
    return(
        <div className="card__container" key={index}>
            <ProjectCard title={project.title} image={project.thumbnail}/>
            <hr />
        </div>
        
    )
})
  
  return (
    <div>
      <Nav />
      <img className="pageImg" src={pageimg} alt="Back-end development"/>
      {beProjectsJSX}
    </div>
  )
}

export default BackEnd