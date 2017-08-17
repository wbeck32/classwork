import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cats from './animals/Cats';
import Dogs from './animals/Dogs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: ['felix', 'garfield', 'tom'],
      dogs: undefined, //['lassie', 'odie', 'otis'],
      selectedDog: ''
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedDog) {
    this.setState({ selectedDog });
  }

  render() {
    const { cats, dogs, selectedDog } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>Dog of the month is {selectedDog}</p>

        <Cats cats={cats}/>
        <Dogs dogs={dogs} onSelect={this.handleSelect}/>
      </div>
    );
  }
}


export default App;
