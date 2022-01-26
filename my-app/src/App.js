// import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Navbar from './Components/Navbar';

// == Import datas
import summaryData from './data/summary';
import projectsData from './data/projects';
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar summary={summaryData}/>
        <Home projectsData={projectsData} />
      </div>
    </Router>
  );
}

export default App;
