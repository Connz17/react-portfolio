import Nav from "../../containers/Nav/Nav"
import "./FrontEnd.scss"
import pageimg from "../../images/pageImages/Front-End.jpg"
import {ProjectData} from "../../data/ProjectData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";




const FrontEnd = () => {

  const feProjectsJSX = ProjectData.frontend.map((project, index) => {
    return(
        <div className="card__container" key={index}>
            <ProjectCard title={project.title} image={project.thumbnail}/>
            <hr />
        </div>
        
    )
})

  return (
    <div>
      <Nav/>
      <img className="pageImg" src={pageimg} alt="Front-end development"/>
      {feProjectsJSX}
    </div>
  )
}

export default FrontEnd