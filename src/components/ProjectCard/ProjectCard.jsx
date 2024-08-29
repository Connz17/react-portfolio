import "./ProjectCard.scss";



const ProjectCard = ({title, image, site, preview}) => {



  return (
    
    <div className="card">
        <img className="card__image" src={image} alt="project thumbnail" onMouseOver={e => e.target.src=preview} onMouseOut={e => e.target.src=image}/>
        <div>
            <h3 className="card__title">{title}</h3>
            { site && <button className="card__button">Visit Site</button> }
            <button className="card__button">Visit Repo</button> 
        </div>
    </div>
  )
}

export default ProjectCard