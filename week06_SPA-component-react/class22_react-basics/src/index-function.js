import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

function App({ animals }) {
    return (
        <ul>
            {['all', 'completed', 'active'].map(filter => (
                <button key={filter}>{filter}</button>
            ))}

            {animals.map((animal, i) => {
                return <Animal key={animal} animal={animal}/>;
            })}
        </ul>
    );
}

function Animal({ animal }) {
    return <li>{animal}</li>;
}

const animals = ['dogs', 'cats', 'birds', 'lizards'];

ReactDOM.render(<App animals={animals}/>, document.getElementById('root'));
registerServiceWorker();

// <Component/>

// Component()

// <Component one="one" two="two"/>

// Component({ one: 'one', two: 'two' })
