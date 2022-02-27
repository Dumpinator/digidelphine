import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";

// == Import datas
import summaryData from './data/summary';
import projectsData from './data/projects';

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Error404 from "./Pages/Error404";

import './App.scss';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar summary={summaryData}/>
            <Routes>
                <Route exact path='/' element={ <Home projectsData={projectsData} />} />
                <Route path='/project' element={ <Projects projectsData={projectsData} />} />
                <Route path='/project/:id' element={<Project projectsData={projectsData} />} />
                <Route path='/home' element={<Home projectsData={projectsData} />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
