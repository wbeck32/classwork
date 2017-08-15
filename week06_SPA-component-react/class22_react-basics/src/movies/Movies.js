import React from 'react';

export function Movies({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <Movie movie={movie}/>
        </li>
      ))}
    </ul>
  );
}

export function Movie({ movie }) {
  return (
    <span>{movie.Title}!</span>
  );
}