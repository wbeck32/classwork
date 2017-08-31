import React, { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import qs from 'qs';

function Navigation({ location }) {
    const currentView = qs.parse(location.search.slice(1)).view || 'thumbnail';

    return (
      <div>
        <Route path="/stores" component={ViewSelector}/>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to={`/stores?view=${currentView}`}>Stores</NavLink></li>
        </ul>
      </div>
    );
}

function ViewSelector() {
  return (
    <div>
      <h5>view</h5>
      {['thumbnail', 'gallery', 'detail'].map(view => {
        return <NavLink key={view} 
          to={{ search: `?view=${view}`}}
          style={{ padding: 10 }}>
          {view}
        </NavLink>;
      })}
    </div>
  );
}

export default withRouter(Navigation);