import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieApp from './movies/MovieApp';
// import TodoApp from './todo/TodoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieApp />, document.getElementById('root'));
// ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
