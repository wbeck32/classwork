import { createStore } from 'redux'; //eslint-disable-line
import reducer from './reducer'; //eslint-disable-line

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
