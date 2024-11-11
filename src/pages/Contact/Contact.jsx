import Nav from "../../containers/Nav/Nav"
import "./Contact.scss"
import linkedIn from "../../images/svgs/linkedin-svgrepo-com.svg"
import gitHub from "../../images/svgs/github-svgrepo-com.svg"
import ContactLink from "../../components/ContactLink/ContactLink";


const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="contact__main">
        <h1 className="contact__title page__heading">Connect with me</h1>
        
        <ContactLink 
          className="link1" 
          link="https://www.linkedin.com/in/connel-nwaodor-b45145125/"
          image={linkedIn}
          alt="LinkedIn Profile"
          name="LinkedIn"/>

      <ContactLink 
            className="link2" 
            link="https://github.com/Connz17"
            image={gitHub}
            alt="GitHub Profile"
            name="GitHub"/>
      </div>
    </div>
  );
};

export default Contact