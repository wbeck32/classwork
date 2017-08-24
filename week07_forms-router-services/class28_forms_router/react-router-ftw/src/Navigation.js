import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import qs from 'qs';

function Navigation({ location }) {
    const currentView = qs.parse(location.search.slice(1)).view || 'thumbnail';

    return (
      <div>
        <Route path="/stores" render={({ history, location }) => {

          return (
            <div>
              <h5>view</h5>
              {['thumbnail', 'gallery', 'detail'].map(view => {
                return <button disabled={view===currentView} key={view} onClick={() => {
                  history.push({ search: `?view=${view}` })  
                }}>
                  {view}
                </button>;
              })}
            </div>
          );
        }}>
        </Route>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to={`/stores?view=${currentView}`}>Stores</Link></li>
        </ul>
      </div>
    );
}

export default withRouter(Navigation);