import React, { Component } from 'react';
import Search from './Search';
import MovieList from './MovieList';

function MovieDetail({ search }) {
  return <div>Movie Detail { search }</div>;
}
function MovieThumbnail({ search }) {
  return <div>Movie Thumbnail { search }</div>;
}
function MovieGallery({ search }) {
  return <div>Movie Gallery { search }</div>;
}

const View = {
  detail: MovieDetail,
  thumbnail: MovieThumbnail,
  gallery: MovieGallery
}

const views = Object.keys(View);

class MovieApp extends Component {

  constructor() {
    super();
    this.state = { 
      search: 'Star Wars',
      view: views[0],
      views: views
    };
  }
  
  render() {
    const { search, views, view } = this.state;
    const MovieView = View[view];

    return (
      <main>
        <header>
          <h1>Movie App</h1>
          <Search initial={search} onSearch={search => this.setState({ search })}/>
        </header>
        <section>
          {views.map(v => (
            <button key={v} onClick={() => this.setState({ view: v })}>
              {v}
            </button>
          ))}
          <MovieView search={search}/>
        </section>
        <section>
          <MovieList search={search}/>
        </section>

      </main>
    );
  }
}

export default MovieApp;


// <Search initial={search} foo="FOO" onSearch={search => this.setState({ search })}/>

// new Search({ initial: search, foo: "FOO", onSearch: search => this.setState({ search })});
