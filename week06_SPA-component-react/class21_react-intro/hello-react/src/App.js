import React, { Component } from 'react';
import './App.css';

const shortHeader = <h2>My Short Message</h2>;
const longHeader = <h1>My Message</h1>;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: props.initialMessage,
      color: '#4682b4'
    }
  }

  handleChange({ name, value }) {
    this.setState({ 
      [name]: value
    });
  }

  render() {

    const header = this.state.message.length < 20 ? shortHeader : longHeader;

    return (
      <div>
        {header}
        <div>
          <label>
            Message:
            <input name="message" value={this.state.message} 
              onChange={({ target }) => this.handleChange(target)}/>
          </label>
          <label>
            Color:
            <input name="color" value={this.state.color} type="color" 
              onChange={({ target }) => this.handleChange(target)}/>
          </label>
        </div>
        <div className="display" style={{
          color: this.state.color
        }}>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
