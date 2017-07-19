function myAsyncFn() {

    var callback = null;

    setTimeout( () => {
        // we need a callback by the time
        // setTimeout callback happens
        if ( callback ) callback();
    }, 1000);


    // instead, return an object that has
    // function that sets the callback
    return {
        then( cb ){
            callback = cb;
        }
    };

}

myAsyncFn().then(() => {
    console.log( 'all done!' );
});