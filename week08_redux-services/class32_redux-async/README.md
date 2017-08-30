Class 31: Redux State Management
===

## Misc
* Makeup Backend Quiz
* 1-on-1's
* DonutJS Meetup

## Questions/Feedback
* The only `TitleCase` used is JavaScript is for "constructor functions" or "classes". In React functions used as components are also uppercased (because `jsx` uses TitleCase to denote "components"). **Nothing else is title cased** 
* React components are declared in one of two ways:
    * `extends Component` - class based component on which React will set `this.props` and returns rendered output from the `render` method
    * vanilla `function` - function based component that takes `props` as 
    it's argument and returns the rendered output
* "Derived" values typically do not require state
* Easy way to separate presentation from container
* DOM events on elements vs Component events

## Misc React

* Use [function form of `setState`](https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous) if you are relying on existing state.
* `this.children`

### Store

1. Combination of state and reducers (which take actions)
1. State is immutable

* `createStore(reducer[, initialState, applyMiddleware])`
    * optional: `initialState`, `applyMiddleware`
* Store methods are generally handled by adapter to the view (`react-redux`):
    * `dispatch` - send an action to the store reducer
    * `subscribe(listener)` - be notified when store state "changes"
    * `getState()` - get the current store state

So, we need a reducer...

#### Reducers

Perform discrete change of store (by creating a new state) based on an action. 

Don't need to be in one file. Use `combineReducers`. These are "segmented" by part of the
store that you need. They don't have access (by default) to rest of store. 

(Typically this is a good thing, but we'll see with thunks and async where it makes sense, and then provide a way to pass more data from store if needed.)

**BUT**, all actions still flow through all reducers because one action may require changes to multiple parts of the state.

```js
// file: ./reducers/index.js

import { combineReducers } from 'redux';
// sibling files in "./reducers":
import stores from './stores';
import store from './store';
import pets from './pets';

export default combineReducers({
  stores,
  store,
  pets
});

// file: ./index.js
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);

```

Multiple reducers can respond to the same action. 

TODO Example `HIDE_COMPLETED`:
1. `settings` reducer creates new state of `setting.showCompleted`
1. `todos` reducer creates new state of `visibleTodos`

#### Middleware

Use `applyMiddleware` to add middleware to your dispatch

* middleware can intercept or modify each action
* you probably won't create, but use via `npm i <middleware>`

* `logger` example
* [`thunk` middleware](https://github.com/gaearon/redux-thunk) is the answer for async!
    * Allows us to specify a function `dispatch => {}` as an action
    * That function gets called with dispatch and then we can do 
    multiple calls at multiple times
    * Full signature is `(dispatch, getState) => {}`




