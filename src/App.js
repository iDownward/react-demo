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
        <Language title="Java" url="https://www.java.com/pt_BR/download/"/>
        <Language title="Paiton" url="https://www.udemy.com/course/aprenda-a-programar-em-python-com-facilidade-do-zero/?gclid=CjwKCAjwqNnqBRATEiwAkHm2BPuxef3XOEz1-ZX9jQHAgYZQVfhFtUi2v1fKnEEsqVoC8L9rQeKDjhoCgLkQAvD_BwE&moon=iapetus&utm_campaign=20180605-Portuguese&utm_medium=udemyads&utm_source=adwords-intl&utm_term=_._ag_55715746026_._kw_python_._ad_377036658218_._de_c_._dm__._pl__._ti_kwd-39231183_._li_1001773_._pd__._"/>
        <Language title="C mais mais" url="https://pt.wikipedia.org/wiki/C%2B%2B"/>
      </div>
    </div>
  );
}

function Language(props){
  const background = props.title == 'Paiton' ? '#ff77ff' : '#ffaaff';

  return(
    <a className="menuItem" href={props.url} target="_blank" style={{backgroundColor: background}}>
          <h2>{props.title}</h2>
          <p>bla bla blaaaa dasljf</p>
    </a>
  );
}

export default App;
