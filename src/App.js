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
        <a href="https://www.java.com/pt_BR/download/" target="_blank">
        <div className="menuItem">
          <h2>Java</h2>
          <p>bla bla blaaaa dasodjaso jsai</p>
        </div>
        </a>
        <a href="https://www.python.org/" target="_blank">
        <div className="menuItem" style={{backgroundColor: '#ff88ff'}}>
          <h2>Paiton</h2>
          <p>bla bla blaaaa dsdljf</p>
        </div>
        </a>
        <a href="https://pt.wikipedia.org/wiki/C%2B%2B" target="_blank">
        <div className="menuItem">
          <h2>C mais mais</h2>
          <p>bla bla blaaaa dasljf</p>
        </div>
        </a>
      </div>
    </div>
  );
}

export default App;
