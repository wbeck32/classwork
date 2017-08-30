import { createStore, combineReducers } from 'redux';

// reducer
function albumsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_ALBUM':
      return [
        ...state, 
        action.payload
      ];
    case 'REMOVE_ALBUM': {
      const index = state.findIndex(a => a === action.payload);
      if(index === -1) return state;
      return [
        ...state.slice(0, index), 
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}

// reducer
function albumsErrorReducer(state = null, { type, payload }) {
  switch(type) {
    case 'ADD_ALBUM':
    case 'REMOVE_ALBUM':
      return null;
    case 'HAS_ERROR':
      return payload;
    default:
      return state;
  }
}

const reducer = combineReducers({
  albums: albumsReducer,
  albumsError: albumsErrorReducer
});

// Use createStore to create a redux "store"
const store = createStore(
  reducer,
  {
    albums: [ 'Cute Bunnies' ],
    albumsError: null
  }
);

// "Store" API
// 1. store.subscribe(listener) -> listens for changes to the state of the store
store.subscribe(() => {
  // 2. store.getState() -> returns the current state of the store
  console.log(store.getState());
});

// 3. store.dispatch(action)
store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Lizards' });
store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Guinea Pigs' });
store.dispatch({ type: 'REMOVE_ALBUM', payload: 'Cute Nothings' });
store.dispatch({ type: 'REMOVE_ALBUM', payload: 'Cute Lizards' });
store.dispatch({ type: 'CLEAR_ERROR' });