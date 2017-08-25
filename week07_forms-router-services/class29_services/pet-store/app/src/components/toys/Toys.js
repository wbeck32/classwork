import React from 'react';
import withToys from './withToys';
import AddToy from './AddToy';

function Toys({ toys, onAdd, onDelete }) {
  return (
    <div>
      <h2>All Toys</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Color</th><th>Silent</th>
          </tr>
        </thead>
        <tbody>
          {toys.map(toy => 
            <Toy key={toy._id} {...toy}/>
          )}
        </tbody>
      </table>
    
      <AddToy onAdd={onAdd}/>
    </div>
  );
}

function Toy({ name, color, silent }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{color}</td>
      <td>{silent ? 'Yes' : 'No'}</td>
    </tr>
  );
}

export default withToys(Toys);
