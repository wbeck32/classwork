# Class 14 Model Relationships

## Questions and Issues?

* Pardon our dust...
	* Classroom improvements
	* Kitchen window repair
* ?

## Today's Learning Objectives
* Create related data models based on 
data usage patterns using mongoose schema options.
* Control json using mongoose `select()`, `populate()`, and `lean()`
* Consolidate business logic in models using static and 
instance mongoose model methods

## Agenda

### Model Part 2

* Data Relationships
	* one to one
	* one to many
		* Demo: pet type
	* many to many
* Related Models
	* ObjectId
	* Prefer children referencing parent ids
	* Sub Documents
		* logical Mongoose constructs
		* don't use unless you really need it
			* Shared subdocument part
			* Break apart very large document
	* ObjectId ref’s
* Using mongoose `.select` and `.populate`
* Mongoose document objects
	* Wrapper arround data
	* performance considerations
	* use `.lean()`
* Augmenting Models with methods
	* static
	* instance