import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';
import styled from 'styled-components';

import Routes from './Routes';
import Nav from '../home/Nav';
import Chat from '../chat/Chat';
import './App.css';

const Header = (
  <div className="App-header">
    <h1>Image Albums</h1>
    <Nav/>
  </div>
);

const ChatSection = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0;
  width: 300px;
  background: lightsteelblue;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: true
    };
  }
  componentDidMount() {
    // const setReady = () => this.setState({ ready: true });

    this.props
      .checkForToken();
      // .then(setReady, setReady);
  }

  render() {
    return (
      <Router>
        <div style={{ position: 'relative' }}>
          {Header}
          <main>
            {this.state.ready && <Routes/>}
          </main>
          {this.props.user && 
            (<ChatSection>
              <Chat/>
            </ChatSection>)
          }
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  dispatch => ({ 
    checkForToken() { return dispatch(checkForToken()); }  
  })
)(App);