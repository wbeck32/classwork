<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" 
width=30> Express and Mongoose Review - User Management and Auth
===

## Questions and Issues

* ?

## Review Models and Routes

* Cheat Sheets

## Learning Objectives

1. Create and add users by unique username and password using auth routes, mongoose and bcrypt
1. Assign tokens with payloads and authenticate them on requests using JWT
1. Authenticate request on selected routes and allow/reject as appropriate

## Agenda

### Authentication vs Authorization
* Authentication - are you who you say you are?
    1. signup/in username and password match, or
    2. user presents a token given to them when #1 happened
* Authorization - are you allowed to do operation?

### Manage Users
* Auth Routes:
    * Signup
    * Signin
    * Verify
* User Model
    * Unique user name (or email)
    * Password handling... `bcrypt-js` - hash password

### Issue Tokens
* Keep Users "signed in" - even across new browser
* Stateless
* Keep Info (like "roles" or "user name") in Payload

### Protect Routes
* Create middleware to protect routes
	* Must be "authenticated", ie have a token
	* Check user roles to provide "authorization" checks
* Authorization
	* Check role
	 

