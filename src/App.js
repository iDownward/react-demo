import React from 'react';
import logo from './logo.svg';
import './App.css';
import {increment} from './actions';
import {useSelector, useDispatch} from 'react-redux';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  componentWillMount(){
    fetch('https://randomuser.me/api/0.8')
      .then(response => response.json())
      .then(json => this.setState({user: json.results[0].user}))
  }

  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Email: {this.state.user.email}
          </p>
          
        </header>
        <div className="Menu">
          <Language title="Java" url="https://www.java.com/pt_BR/download/"/>
          <Language title="Paiton" url="https://www.udemy.com/course/aprenda-a-programar-em-python-com-facilidade-do-zero/?gclid=CjwKCAjwqNnqBRATEiwAkHm2BPuxef3XOEz1-ZX9jQHAgYZQVfhFtUi2v1fKnEEsqVoC8L9rQeKDjhoCgLkQAvD_BwE&moon=iapetus&utm_campaign=20180605-Portuguese&utm_medium=udemyads&utm_source=adwords-intl&utm_term=_._ag_55715746026_._kw_python_._ad_377036658218_._de_c_._dm__._pl__._ti_kwd-39231183_._li_1001773_._pd__._"/>
          <Language title="C mais mais" url="https://pt.wikipedia.org/wiki/C%2B%2B"/>
        </div>
        <Footer password={this.state.user.password} />
      </div>
    );
  }
}

function Language(props){
  const background = props.title == 'Paiton' ? '#ff77ff' : '#ffaaff';

  return(
    <a className="menuItem" href={props.url} target="_blank" style={{backgroundColor: background}}>
          <h2>{props.title}</h2>
          <p>lorem ipsum aushdiauhdisahd asdapsd jisa dhasi dhsa piudhsa idsah idas dsa</p>
    </a>
  );
}

function Footer(props){
  const inc = useSelector(state => state);
  const dispatch = useDispatch();
  //dispatch(increment());
  return (
    <footer>
      <p>password: {props.password}</p>
      <button onClick={_ => dispatch(increment())}>redux</button>
    </footer>
  );
}

export default App;
