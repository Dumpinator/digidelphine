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
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
