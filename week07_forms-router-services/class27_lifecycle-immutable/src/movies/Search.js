import React from 'react';

function Search({ initial, onSearch }) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            const { search } = event.target.elements;
            onSearch(search.value);
        }}>
            <input name="search" defaultValue={initial}/>
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;
