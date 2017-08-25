import React from 'react';
import withStores from './withStores';
import AddStore from './AddStore';
import { Link } from 'react-router-dom';

// Stores is a stateless component. Only renders stores,
// doesn't know about stores data that comes via props
// --
// Notice: the onAdd and onDelete are being injected here
// as props from the withStores StoresContainer.
// Notice: match is a "pass-thru" property from the outer 
// StoresContainer wrapper that got it from <Route> in App.js
function Stores({ stores, match, onAdd, onDelete }) {
  return (
    <div>
      <h2>All Our Pet Stores</h2>
      <ul>
        {stores.map(store => 
          <Store 
            key={store._id} 
            to={`${match.url}/${store._id}`}
            {...store}/>
        )}
      </ul>
    
      <AddStore onAdd={onAdd}/>
    </div>
  );
}

function Store({ name, to }) {
  return (
    <li><Link to={to}>{name}</Link></li>   
  );
}

// now let's "wrap" Stores via a call to withStores
// that will "inject" the stores prop and the add and delete
// functions
export default withStores(Stores);
