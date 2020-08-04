import React from 'react';
import logo from './clouds.svg';
import './App.css';
import Forecast from "./components/forecast/Forecast"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
         <img src={logo} className="App-logo" alt="logo" />
        <h1>ReactJS Weather App</h1>
             </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Justin Tucker, 2020
      </footer>
    </div>
  );
}

export default App;
