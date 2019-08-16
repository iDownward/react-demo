import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pocotó Pocotó
        </p>
      </header>
      <div className="Menu">

        <div className="menuItem">
          <h2>Java</h2>
          <p>bla bla blaaaa dasodjaso hjkjhkjhkjhkjsadkjsadkjaSasASasjsai</p>
        </div>


        <div className="menuItem" style={{backgroundColor: '#ff88ff'}}>
          <h2>Paiton</h2>
          <p>bla bla blaaaa dsdljf</p>
        </div>


        <div className="menuItem">
          <h2>C mais mais</h2>
          <p>bla bla blaaaa dasljf</p>
        </div>

      </div>
    </div>
  );
}

export default App;
