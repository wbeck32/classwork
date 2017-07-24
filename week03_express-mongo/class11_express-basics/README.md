# Class 06 EventEmitters and Streams

## Questions and Issues?

* More clarity in lab instructions
* More monitors?
* New whiteboards
* ?

### Mongo on Travis CI

```yaml
language: node_js
node_js:
  - "8"

sudo: false
services:
- mongodb
addons:
  apt:
    sources:
    - mongodb-3.4-precise
    packages:
    - mongodb-org-server
```

## Today's Learning Objectives

* “Starting” an express app, 
	* just _httpServer_, ie .listen() vs 
	* http.createServer(app)
* Setup app routing _with ExpressJS_ using 
method and path matching.
* Use `:id` and `req.params` to capture dynamic path parts
* Use `req.query` to read query parameters
* Handle correct order of routes
* Serve static assets using `express.static`
* SSR a page using `res.render`
* Use npm package `body-parser`

Later this week:
* Server serve rendered pages using ~~`jade`~~ `pug` and `render.view`

## Overview

### ExpressJS

* routing
	* method based functions (`app.get`)
	* response.send
	* regex
	* order
	* parameters (route and query)
		* request
	* `app.use()`
* static files
* rendered views
* project structure
	* don't use one huge app.js file!
	* views, routes, static
	* express generator
	* `express.Router()` (tomorrow)

### Mongoose (basic intro)
* Mongoose Schemas
	* Defining “Properties”
		* Types and property options
	* Schema Options
		* timestamp
		* required
		* validation...
	* Testing models
* Consuming models in routes
	* Static model methods (`Model.findOne()`)
	* instance models (`model.save()`)
* Testing mongodb
	* Running test server for use in e2e testing
	* Preparing resources for testing