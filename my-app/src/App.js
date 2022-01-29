// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Navbar from './Components/Navbar';

// == Import datas
import summaryData from './data/summary';
import projectsData from './data/projects';

import Home from "./Pages/Home";
import Projets from "./Pages/Projects";

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar summary={summaryData}/>
            <Routes>
                <Route path='/' element={ <Home projectsData={projectsData} />} />
                <Route path='/projects' element={ <Projets projectsData={projectsData} />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
