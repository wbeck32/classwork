import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from './Counter';
import AlbumsContainer from './albums/AlbumsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Albums</h2>
        </div>
        {/* <Counter/> */}
        <AlbumsContainer/>
      </div>
    );
  }
}

export default App;
