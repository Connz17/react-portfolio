import Nav from "../../containers/Nav/Nav"
import "./Home.scss"
import {HomePageData} from "../../data/HomeData"
import pageImg from "../../images/svgs/code-circle-svgrepo-com.svg";



const Home = () => {

  return (
    <>
      <Nav />
      <div className="home">
          <div className="typewriter">
            <div className="titleContainer">
              <h2 className="titleMessage">{HomePageData.startTag} Welcome, I'm Connel a software developer. {HomePageData.closeTag}</h2>
            </div>
            <img className="homeImg" src={pageImg} alt="code circle" />
          </div>
      </div>
    </>
  )
}

export default Home