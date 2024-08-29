import Nav from "../../containers/Nav/Nav"
import "./FullStack.scss"
import pageimg from "../../images/pageImages/Full stack.avif"



const FullStack = ({FSprojects}) => {

  return (
    <div>
      <Nav/>
      <img className="pageImg" src={pageimg} alt="FFull Stack development"/>
      {FSprojects}
    </div>
  )
}

export default FullStack