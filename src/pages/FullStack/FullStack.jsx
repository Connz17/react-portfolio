import Nav from "../../containers/Nav/Nav"
import "./FullStack.scss"
import pageimg from "../../images/pageImages/Full stack.avif"
import {ProjectData} from "../../data/ProjectData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";



const FullStack = () => {

  const flsProjectsJSX = ProjectData.fullstack.map((project, index) => {
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
      <img className="pageImg__fs" src={pageimg} alt="FFull Stack development"/>
      {flsProjectsJSX}
    </div>
  )
}

export default FullStack