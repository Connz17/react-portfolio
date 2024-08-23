import "./ProjectCard.scss";



const ProjectCard = ({title, image}) => {



  return (
    
    <div className="card">
        <img className="card__image" src={image} alt="project thumbnail" />
        <div>
            <h3 className="card__title">{title}</h3>
            <button className="card__button">Visit Site</button>
            <button className="card__button">Visit Repo</button>
        </div>
        
    </div>
  )
}

export default ProjectCard