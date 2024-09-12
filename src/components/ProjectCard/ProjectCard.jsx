import "./ProjectCard.scss";
import template from "../../images/projectPreviews/templatePreview.webp"



const ProjectCard = ({title, image, site, preview, repo}) => {

if (preview === "") {
  preview = template;
}

  return (
    
    <div className="card">
        <img className="card__image" src={image} alt="project thumbnail" onMouseOver={e => e.target.src=preview} onMouseOut={e => e.target.src=image}/>
        <div>
            <h3 className="card__title">{title}</h3>
            { site && <button className="card__button">Visit Site</button> }
            <a href={repo} target="_blank" rel="noreferrer"><button className="card__button">Visit Repo</button></a> 
        </div>
    </div>
  )
}

export default ProjectCard