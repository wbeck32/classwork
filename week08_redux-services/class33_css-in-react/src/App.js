import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './B.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <A/>
        <B/>
      </div>
    );
  }
}

function A() {
  return <p>Component A</p>;
}

function B() {
  return <p>Component B</p>;
}

export default App;
