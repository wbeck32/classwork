Data Services and Full Stack
===

## Questions/Issues
* ?

## Agenda

### Full Stack

* setup project for app/server
    * setup
        * separate folders, repos (travis)
        * locate as siblings by convention:
            ```
            |
            +- app
            +- server
            ```
    * app/server communication
        * Dev time
            * Start mongoDb
            * Start server (for example on port `3001`)
            * Start app
                * `"proxy": "http://localhost:3001"`
                * (need special config for non-json)
        * build: copy to `./server/public`
            * Project runs from `3001`
            * Need to handle `sendFile` for `index.html` at other paths

### App Changes

* Services
    * Own folder
    * Encapsulate calls based on resource
    * Isolate components from http
    * Have base "request" or "fetcher" module
* Container Components
    * separate data fetch/update from presentation
    * Named "<Thing>Container", or
    * with<Thing>
* Actions
    * Leave in Container Components for now...