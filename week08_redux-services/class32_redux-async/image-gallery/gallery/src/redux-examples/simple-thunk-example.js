/* eslint no-console: off */
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

// albums reducer
function reducer(state = 'bar', { type, payload }) {
  switch(type) {
    case 'DO_THING':
      return payload;
    default:
      return state;
  }
}

// Use createStore to create a redux "store"
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const doThing = () => {
  return (dispatch, getState, extra) => {
    console.log('extra is', extra);
    dispatch({
      type: 'DO_THING',
      payload: 'BAR'
    });
  };
};

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(doThing());


// //thunk style action
// const getAlbums = dispatch => {
//   dispatch({ type: 'FETCHING_ALBUMS' });
  
//   api.getAlbums()
//     .then(albums => {
//       dispatch({ type: 'FETCHED_ALBUMS', payload: albums });
//     })
//     .catch(error => {
//       dispatch({ type: 'FETCHED_ALBUMS_ERROR', payload: error });
//     });
// };

// pass in a FUNCTION, not an object as our action.
// because we added thunk middleware, our function will be called with dispatch
// store.dispatch(getAlbums);

// // 3. store.dispatch(action)
// store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Lizards' });
// store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Guinea Pigs' });
// store.dispatch({ type: 'REMOVE_ALBUM', payload: 'Cute Lizards' });