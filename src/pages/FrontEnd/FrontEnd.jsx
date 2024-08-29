import Nav from "../../containers/Nav/Nav"
import "./FrontEnd.scss"
import pageimg from "../../images/pageImages/Front-End.jpg"





const FrontEnd = ({FEprojects}) => {

  return (
    <div>
      <Nav/>
      <img className="pageImg" src={pageimg} alt="Front-end development"/>
      {FEprojects}
    </div>
  )
}

export default FrontEnd