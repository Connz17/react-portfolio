import Nav from "../../containers/Nav/Nav"
import "./Home.scss"



const Home = () => {

  return (
    <>
      <Nav />
      <div className="home">
        <main>
          <div className="typewriter">
            <div className="titleContainer" id="containerOne">
              <h2>Welcome, I'm Connel a software developer.</h2>
            </div>
          </div>
            <br />
          <div className="typewriter">
            <div className="tcOne">
              <h2>Please take a look through my portfolio and see some of my projects and tech stack!</h2>
            </div>
          </div>
          <div className="typewriter">
            <div className="titleContainer" id="containerTwo">
              <h2 className="titleMessage">Connel, software developer.</h2>
            </div>
          </div>
          <br />
          <div className="typewriter">
            <div className="tcTwo">
              <h2>Take a look through my projects and tech stack!</h2>
            </div>
          </div>
          <div className="typewriter">
            <div className="titleContainer" id="containerThree">
              <h2 className="titleMessage">Welcome</h2>
            </div>  
          </div>
          <br /> 
          <div className="typewriter">
            <div className="tcThree">
              <h2>Take a look through my portfolio!</h2>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home