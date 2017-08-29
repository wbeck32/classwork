// import { createStore } from 'redux';
const { createStore } = require('redux');

// action is { type, payload }
const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCHED_IMAGES':
      // payload is array of fetched images
      return payload;
    case 'ADDED_IMAGE':
      // payload is the object of the newly added image
      return [
        ...state,
        payload
      ];
    case 'REMOVED_IMAGE': {
      // payload is the id of the deleted image
      const index = state.findIndex(i => i._id === payload);
      if(index < 0) return state;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }
    // case 'EDITED_IMAGE': {

    // }
    default:
      return state;
  }
};

// create a store based on our reducer(s),
// and (optionally) an initial state. 
// Normally an object, here a simple number.
const store = createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  // eslint-disable-next-line
  console.log('the store state is', state);
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT', payload: 5 });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT', payload: 3 });
store.dispatch({ type: 'INCREMENT' });



// export default store;
