import "./TechStack.scss";


const TechStack = ({image, name}) => {


  return (
  <div className="skill">
    <div className="skill__image" >
      <img src={image} alt={name}/>
    </div>
    <div className="skill__name">
      <h3>{name}</h3>
    </div>
  </div>
  )
}

export default TechStack



