import './App.scss';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from './containers/Nav/Nav';



function App() {
  return (
  <Router >
    <div className="App">
      <Routes>
        <Route path='/'
          element={<Nav/>}>
        </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
