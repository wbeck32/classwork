<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> React Testing, Misc
===

## Questions/Issues

* VSCode JavaScript React
* ?

## Agenda

* Passing functions as actions
	* "events up"
* Rules of state
	* Sibling components that share state? Must live in common ancestor
	* Push state a far down as possible
* Props
 	* Types
	* Defaults
* Use snapshot testing to test component outputs
	* Using `react-test-renderer`
	* Using `enzyme`
* Testing state changes
	* Use component API via `.instance()`
	* Also have `.setState()` and `.setProps()`
	* Trigger callbacks by calling function
* // optional
* Component Life cycle methods
* `setState` with
	* Updater
	* Callback
