import "./ProjectCard.scss";
import template from "../../images/projectPreviews/templatePreview.webp"
import { Link } from "react-router-dom";



const ProjectCard = ({title, image, site, preview, repo, project}) => {

if (preview === "") {
  preview = template;
}

  return (
    
    <div className="card">
        <img className="card__image" src={image} alt="project thumbnail" onMouseOver={e => e.target.src=preview} onMouseOut={e => e.target.src=image}/>
        <div>
            <Link to={`/${title}`} style={{ textDecoration: "none" }}><h3 className="card__title">{title}</h3></Link>
        </div>
    </div>
  )
}

export default ProjectCard