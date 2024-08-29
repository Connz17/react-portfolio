import Nav from "../../containers/Nav/Nav"
import "./BackEnd.scss"
import pageimg from "../../images/pageImages/Profession_-Backend.png"



const BackEnd = ({BEprojects}) => {
  
  
  return (
    <div>
      <Nav />
      <img className="pageImg" src={pageimg} alt="Back-end development"/>
      {BEprojects}
    </div>
  )
}

export default BackEnd