<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" 
width=30> Review, Forms, Data Immutability
===

## Questions, Feedback, Misc
* Backend Quiz makeup
	* Need new quiz due to reference solution
	* Will be very similar
	* Do on own time
* ?

## Today's Learning Objectives

* Know how to edit lists in React
	* Using immutable data
* Begin to use key component lifecycle methods
* Know how to use React "controlled" form inputs

## Agenda

### Why immutable data?

* Components are reused
	* Re-introduce `key`
		* Component reused by default
	* [Component Lifecycle Methods](https://facebook.github.io/react/docs/react-component.html)
		* `constructor`
		* `componentWillMount`* vs `componentDidMount`
			* [Fetching Data](https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/)
		* `componentWillReceiveProps`
			* Need to use when updating component that does not re-render
		* `shouldComponentUpdate`
			* Prevents unnecessary updates
		* `componentWillUpdate`* and `componentDidUpdate`*
		* `render` +1

DEMO: movie list from search term

### Editing Lists

Core Operations
* Add
* Remove
* Edit

Demo: TODO


Element	| Value property | Change callback | New value in the callback
---|---|---|---
`<input type="text" />`|`value="string"`|`onChange`|`event.target.value`
`<input type="checkbox" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<input type="radio" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<textarea />`|`value="string"`|`onChange`|`event.target.value`
`<select />`|`value="option value"`|`onChange`|`event.target.value`

