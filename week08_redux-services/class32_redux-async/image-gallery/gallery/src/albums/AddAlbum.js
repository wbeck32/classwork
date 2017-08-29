import React from 'react';

export default function AddAlbum({ onAdd }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      onAdd({ name: e.target.elements.name.value });
    }}>
      <input required name="name"/>
      <button type="submit">Add</button>
    </form>
  );
}