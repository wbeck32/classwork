import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom'
import Home from './home/Home';
import Menu from './menu/Menu';
import Stores from './stores/Stores';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
            <Navigation/>
          </div>    
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/stores" render={({ match, location }) => {
              return <Stores match={match} location={location}/>
            }}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
