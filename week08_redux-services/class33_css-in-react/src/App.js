import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import A from './A';
import B from './B';

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

export default App;
