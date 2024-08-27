import Nav from "../../containers/Nav/Nav"
import "./Home.scss"
import pageImg from "../../images/svgs/code-circle-svgrepo-com.svg";



const Home = () => {

  return (
    <>
      <Nav />
      <div className="home">
          <div className="typewriter">
            <div className="titleContainer" id="containerOne">
              <h2 className="titleMessage">Welcome, I'm Connel a software developer.</h2>
            </div>
            <div className="titleContainer" id="containerTwo">
              <h2 className="titleMessage">Connel, software developer.</h2>
            </div>
            <div className="titleContainer" id="containerThree">
              <h2 className="titleMessage">Welcome</h2>
            </div>
            <img className="homeImg" src={pageImg} alt="code circle" />
          </div>
      </div>
    </>
  )
}

export default Home