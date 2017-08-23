import React, { Component } from 'react';
import { search } from '../services/movieApi';

export default class Movies extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    fetchMovies(searchTerm) {
        search(searchTerm).then(movies => this.setState({ movies }));
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.search === this.props.search) return;
        this.fetchMovies(nextProps.search);
    }

    componentDidMount() {
        this.fetchMovies(this.props.search);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return true;
    }
    

    render() {
        const { movies } = this.state; 
        return (
            <ul>
            {movies && movies.map(movie => (
                <li key={movie.imdbID}>
                    <Movie movie={movie}/>
                </li>
            ))}
            </ul>
        );
    }
}

export function Movie({ movie }) {
  return (
    <div style={{ 
        padding: '10px',
        clear: 'both' 
    }}>
        <img src={movie.Poster} 
            alt={movie.Title}
            style={{ 
                float: 'left',
                width: 100 
            }}/>
        <span>{movie.Title}!</span>
    </div>
  );
}