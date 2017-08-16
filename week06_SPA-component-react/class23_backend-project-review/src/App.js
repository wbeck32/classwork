import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Search } from './Search';

class App extends Component {

  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{this.state.search}</div>
        <Search onSearch={(search) => this.setState({ search })}/>
      </div>
    );
  }
}

export default App;
