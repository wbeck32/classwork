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

  constructor(props) {
    super(props);
    this.state = {
      ready: true
    };
  }
  componentDidMount() {
    // const setReady = () => this.setState({ ready: true });

    this.props
      .checkForToken()
      // .then(setReady, setReady);
  }

  render() {
    return (
      <Router>
        <div className="App">
          {Header}
          <main>
            {this.state.ready && <Routes/>}
          </main>
          <Footer render={name => <span>Hello {name}</span>}/>
        </div>
      </Router>
    );
  }
}

function Footer(props) {
  console.log('Footer props', props);
  return props.render('bob');
  // return <div>This is the footer {props.children}</div>;
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({ 
    checkForToken() { return dispatch(checkForToken()); }  
  })
)(App);