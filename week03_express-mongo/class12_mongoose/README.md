# Class 06 EventEmitters and Streams

## Questions and Issues?

* Use a timer when working in group
* Code war points
* ?

## Review Quiz

Quizzes are generally simplified key concepts of prior week. No tricks, but 
grasping core concepts and pieces makes it easier.

Biggest obstacles:
* Copying in too much boilerplate
* Not reading requirements
* Need more practice


## Today's Learning Objectives

### Mongoose
* use `npm i mongoose -S` (no need for `mongodb`)
* Connecting - look at in class example
* Mongoose Schemas
	* Defining “Properties” (aka paths)
		* Types and property options
		* How to nest
			* Arrays: inside `[]` is example type of this array
	* Schema Options
		* timestamp
		* required
		* `enum`
		* validation...
	* Turn into models...
	* Testing models
* Consuming models in routes
	* Static model methods (`Model.findOne()`)
	* instance models (`model.save()`)
	* Additional modifiers:
		* `select`
		* `lean`
		* `where`
		* `count`
* Differences from raw mongodb drivers:
	* Use `mongoose` in requires and for creating the connection
	* No `ObjectID` required
	* No `toArray` or `res.ops[0]`
	* Additional static methods: `findById` and friends
	* Adds a `__v` prop
* Testing mongodb
	* Running test server for use in e2e testing
	* Preparing resources for testing