import React, { Component } from 'react';


function FunctionComponent({ foo, things, action }) {
  return (
    <div>
      <input onChange={({ target }) => actions(target.value)}/>
      {things.map(thing => <button onClick={() => action(thing._id)}>select</button>)}
      <button onClick={() => action()}>me</button>
      <MyComponent onAdd={action}
    </div>
  );
}