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



function App() {
  return (
  <Router >
    <div className="App">
      {/* <Nav/> */}
      <Routes>
      <Route path='/projects'
          element={<Projects/>}>
        </Route>
      <Route path='/projects/front-end'
          element={<FrontEnd/>}>
        </Route>
      <Route path='/projects/back-end'
          element={<BackEnd/>}>
        </Route>
      <Route path='/projects/full-stack'
          element={<FullStack/>}>
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
