import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';

import Routes from './Routes';
import Nav from '../home/Nav';

const Header = (
  <div className="App-header">
    <h1>Image Albums</h1>
    <Nav/>
  </div>
);

class App extends Component {
  componentDidMount() {
    this.props.checkForToken();
  }

  render() {
    return (
      <Router>
        <div className="App">
          {Header}
          <main>
            <Routes/>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({ 
    checkForToken() { dispatch(checkForToken()); }  
  })
)(App);