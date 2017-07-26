# Class 13 Express Middleware

## Questions and Issues?

* ?

## Today's Learning Objectives

* Correctly order app routes and multi-function routes by knowing how middleware "flows"
* Understand what third-party middlewares like `body-parser` are actually doing and consume third-party middleware via npm modules like `morgan`
* Modularize resource routes using `express.Router()`
* Create middleware chains using `app.use` and `app.METHOD`
* Create custom, tested middleware using express middleware functions 
* Correctly handle middleware errors and 404 errors by setting up 
express error handling middleware functions 
* Use the `next()` function to selectively apply common app logic like authentication and authorization
* Introduce custom properties on the request object

## Agenda

### Express Middleware

#### Middlewhat?

* Ambiguous based on broad history
* Larger architectural meaning - middle between API and db
* For our purposes, think about the middle between request and response
* Basic "handler": `( res, req[, next] ) => { ... }`
* Middleware is flow to find one or more handlers

#### All starts with `app.use()`

* `app.METHOD` "short cuts"
* `next()`
	* `( res, req[, next] ) => { ... }`
* order matters

#### Functional middlewares

* Doesn't handle response, just does additional work
* Sometimes this is what people mean by middleware
* body-parser, authentication, authorization

#### Another axis

* `app.use( fn1, fn2, fn3 )`
* `next('route')`

#### Demos:
* `morgan`
* Super-sekrit password header

#### Another branch...

* on to [`express.Router`](https://github.com/martypdx/workshop-express-middleware/blob/master/router.md)...

### [Express middleware and `next()`](https://github.com/martypdx/workshop-express-middleware/blob/master/next.md)
	* Demo: 
		* Logger
		* Body Parser
* Middleware error handling
	* Mob Program: Error Handler