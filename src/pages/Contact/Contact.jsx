import Nav from "../../containers/Nav/Nav"
import "./Contact.scss"
import linkedIn from "../../images/svgs/linkedin-svgrepo-com.svg"
import gitHub from "../../images/svgs/github-svgrepo-com.svg"


const Contact = () => {
  return (
    <div>
      <Nav/>
      <div className="contact__main">
        <h1 className="page__heading" id="Contact__title">Connect with me</h1>
        <a id="linkedIn__image" href="https://www.linkedin.com/in/connel-nwaodor-b45145125/" target="_blank">
          <img className="icon__image" id="linkedIn__image" src={linkedIn} alt="Linked In" />
        </a>
        <h3 className="icon__text" id="linkedIn__text">LinkedIn</h3>
        <a id="gitHub__image" href="https://github.com/Connz17" target="_blank">
          <img className="icon__image" src={gitHub} alt="Git Hub"/>
        </a>
        <h3 className="icon__text" id="gitHub__text">Git Hub</h3>
      </div>
    </div>
  )
}

export default Contact