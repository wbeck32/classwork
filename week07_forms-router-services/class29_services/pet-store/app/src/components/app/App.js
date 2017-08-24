import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './header/Header';
import Home from './home/Home';
import Stores from '../stores/Stores';
import StoreDetail from '../stores/StoreDetail';
import Pets from '../pets/Pets';
import Toys from '../toys/Toys';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <main>
            {/*<Switch> === new Switch()*/}
            <Switch> 
              <Route exact path="/" component={Home}/>;
              <Route exact path="/stores" component={Stores}/>
              <Route path="/stores/:storeId" component={StoreDetail}/>
              <Route path="/pets" component={Pets}/>
              <Route path="/toys" component={Toys}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
