<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" 
width=30> Review, Forms, Data Immutability
===

## Questions, Feedback, Misc
* ?

## Today's Learning Objectives

* Know how to edit lists in React
	* Using immutable data

## Agenda

### Editing Lists

Core Operations
* Add
* Remove
* Edit

Demo: TODO

### Forms

Forms and editing data

* Uncontrolled components "Pull the value"
	* form `onSubmit`
	* `ref`
* Controlled components
	* all changes handled with state change
	* matching value set and onChange


Element	| Value property | Change callback | New value in the callback
---|---|---|---
`<input type="text" />`|`value="string"`|`onChange`|`event.target.value`
`<input type="checkbox" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<input type="radio" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<textarea />`|`value="string"`|`onChange`|`event.target.value`
`<select />`|`value="option value"`|`onChange`|`event.target.value`

