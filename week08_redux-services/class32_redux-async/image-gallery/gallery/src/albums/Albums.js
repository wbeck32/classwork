import React from 'react';
import AddAlbum from './AddAlbum';

export default function Albums({ albums, loading, error, addAlbum }) {

  if(loading) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {albums.map(album => (
          <li key={album._id}>{album.name}</li>
        ))}
      </ul>
      {error && error.map(err => <pre style={{ color: 'red' }}>{err}</pre>)}
      <AddAlbum onAdd={addAlbum}/>
    </div>
  );
}