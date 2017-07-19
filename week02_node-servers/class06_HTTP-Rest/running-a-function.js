
module.exports = function app(req, res) {    
    // handle all the http stuff
    // 1. determine what route, params, etc.
    // 2. call the right handler
    // 3. do the http work to send the result back over the res
    const parsedUrl = url.parse(req.url);
    const route = figureOutRouteFrom(parsedUrl);

    //what route?
    const name = figureOutNameFrom(parseUrl);
    const salutation = figureOutSalutationFrom(parseUrl.query)
    const greeting = greet(saluation, name)
    res.end(greeting);
};

function greet() {

}

function fact() {

}
