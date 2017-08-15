<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" 
width=30> React Components and JavaScript classes
===

## Questions, Feedback, Misc
* ?

## Today's Learning Objectives

* React `props`
* Using functions as components
* Using `extends Component` as components
* Handles lists of data in React

## Agenda

### Components

#### Functions

Pure functions take `props` and have no state

#### Lists

* Using `.map()` to handle lists of things
* Using `key` to map between data and DOM

#### `this`
* Implicit based on call-site
* Functions
	* Explicit via `bind` and `call` and `apply`
	* Contextless `=>` functions

#### `class`

* Prototypical Inheritence
* Props ontop of Props
* (Same paradigm as nested scope)
* Favor composition over inheritence
* Useful as container for combined behavior and state (date)
	* Compare Class vs Higher-Order Function
* Useful in API's as construct to build on (React `Component`)

#### Extend `Component`

Why?
* Need state
* Need life cycle methods (not today)

(see also `extends PureComponent` - will cover after we talk about immutable data)

