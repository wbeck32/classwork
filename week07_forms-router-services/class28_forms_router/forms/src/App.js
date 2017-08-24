import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddImage from './AddImage';
import ControlledAddImage from './ControlledAddImage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: {
        title: 'Cute Bunny',
        description: 'Really, really cute',
        url: 'http://somewhere.com/cute',
        certified: true
      }
    }
  }

  addImage = image => {
    console.log('would add', image);
  }

  componentDidMount() {
    setTimeout(() => this.searchInput.focus());
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <AddImage onAdd={this.addImage}/>
        </div>
        <div>
          <input name="search" ref={input => this.searchInput = input}/>
          <input
            type="button"
            value="Focus the text input"
            onClick={() => this.searchInput.focus()}
          />
        </div>
        <div>
          <pre>{JSON.stringify(this.state.image, true, 2)}</pre>
          <ControlledAddImage image={this.state.image} onAdd={this.addImage}/>
        </div>
      </div>
    );
  }
}

export default App;
