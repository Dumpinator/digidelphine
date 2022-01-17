// import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Navbar from './Navbar';

// == Import datas
import summaryData from './data/summary';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar summary={summaryData}/>

      </div>
    </Router>
  );
}

export default App;
