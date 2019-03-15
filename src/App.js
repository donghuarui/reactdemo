import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TP from './component/TP'
import TestOne from './component/TestOne'
function TestPage(props){
    return <h1>{props.name}</h1>
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "dhr"};
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
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
            <TestPage name="222"></TestPage>
            <TP name="7777"></TP>
            <TestOne name={this.state.name}></TestOne>
        </header>
      </div>
    );
  }
}

export default App;
