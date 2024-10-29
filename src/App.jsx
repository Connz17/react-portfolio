import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';
import FullStack from './pages/FullStack/FullStack';
import BackEnd from './pages/BackEnd/BackEnd';
import FrontEnd from './pages/FrontEnd/FrontEnd';
import Projects from './pages/Projects/Projects';
import {ProjectData} from "./data/ProjectData";
import ProjectCard from './components/ProjectCard/ProjectCard';
import SingleProject from './pages/SingleProject/SingleProject';




function App() {

  const renderProjectCards = (projects) =>
    projects.map(({ title, thumbnail, preview }, id) => (
      <div className="card__container" key={id}>
        <ProjectCard title={title} image={thumbnail} preview={preview} />
        <hr />
      </div>
    ));

    
  
  const fullstackJSX = renderProjectCards(ProjectData.fullstack);
  const frontendJSX = renderProjectCards(ProjectData.frontend);
  const backendJSX = renderProjectCards(ProjectData.backend);

  const allProjects = [].concat(ProjectData.fullstack, ProjectData.frontend, ProjectData.backend)

  
  return (
  <Router >
    <div className="App">
      <Routes>
      <Route path='/projects'
          element={<Projects/>}>
        </Route>
      <Route path='/projects/front-end'
          element={<FrontEnd FEprojects={frontendJSX}/>}>
        </Route>
      <Route path='/projects/back-end'
          element={<BackEnd BEprojects={backendJSX}/>}>
        </Route>
      <Route path='/projects/full-stack'
          element={<FullStack FSprojects={fullstackJSX}/>}>
        </Route>
        <Route path='/:title'
          element={<SingleProject projects={allProjects}/>}>
        </Route>
      <Route path='/skills'
          element={<Skills/>}>
        </Route>
        <Route path='/about'
          element={<About/>}>
        </Route>
        <Route path='/contact'
          element={<Contact/>}>
        </Route>
        <Route path='/'
          element={<Home/>}>
        </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;

