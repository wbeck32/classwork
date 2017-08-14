import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'World'
    }
  }

  handleClick() {
    const name = this.state.name === 'World' ? 'Mars' : 'World';
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <div className="App" onClick={() => this.handleClick()}>
          Hello {this.state.name}
        </div>
        <div>
          <input value={this.state.name} onKeypress={() => this.handleKeypress()}/>
        </div>
      </div>
    );
  }
}

export default App;
