<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" 
width=30> Review, Forms, Data Immutability
===

## Questions, Feedback, Misc
* Travis
* ?

## Agenda

### Forms

* Forms and editing data
* Uncontrolled components "Pull the value"
    * form `onSubmit`
    * `ref`
* Controlled components
    * all changes handled with state change
    * matching `value` set and `onChange`
* Examples

Element	| Value property | Change callback | New value in the callback
---|---|---|---
`<input type="text" />`|`value="string"`|`onChange`|`event.target.value`
`<input type="checkbox" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<input type="radio" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<textarea />`|`value="string"`|`onChange`|`event.target.value`
`<select />`|`value="option value"`|`onChange`|`event.target.value`

### React Router

* `Router`
    * Wrapper for entire app under control of the "Router"
    * Usually `BrowserRouter`
        * Server needs to handle various paths as `index.html`
    * `HashRouter` for "static"
* `Link`
    * Used to cause the route to change
    * Use the `to` attribute
    * Use `match` param to link dynamically
* `Route`
    * Dynamic rendering based on the "path" of the current url
    * Injects `match` prop automagically!
    * `path` matched "starts with"
        * doesn't include query part
        * use `exact` to match exact
    * Use `match` param to link dynamically
* `Switch`
    * Groups a set of Routes allowing only to match
    * Otherwise each Route evaluates independently
    * Don't need if alternatives are mutually exclusive
    * Can provide "default `Route` with no path
    * Can include `Redirect`
* `Router` rendering
    1. `component` - specify a valid `function` or `class` name
    1. `render` - supply a function
* Params
    * "Capture" parts of the url as params
    * Familiar `:id` syntax
    * Accessible via `match.params.id`
    * Always a `string`
* Subroutes
    * Use `match.url`
    * recurse ftw!
* `Redirect`
    * return from a render method to "redirect"
    * or redefine an existing route
* `Prompt`
    * Conditionally prevents navigation away from a route
* Wrapping `Route` in component
    * `Route` can be nested, don't have to be together
* Multiple `Route` components can exist across app the update different
parts of the app


