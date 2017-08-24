import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ViewSelector from './ViewSelector';

// these would be imported
function Home() { return <div>Home<Images/></div>; }
function Images() { return <div>Images</div>; }
function About() { return <div>About</div>; }

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Routes/>
        <ViewSelector images={[]}/>
      </div>
      </Router>
    );
  }
}

export default App;

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/images" component={Images}/>
      <Route exact path="/about" component={About}/>
      <Redirect to="/"/>
    </Switch>
  );
}
