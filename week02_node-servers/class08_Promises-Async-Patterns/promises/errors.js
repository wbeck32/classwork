/* eslint no-console: off */

function evenIsEvil(n) {
    return new Promise((resolve, reject) => {
        if(n % 2 === 0) reject('evil even number');
        resolve(n);
    });
}

evenIsEvil(3)
    .then(n => {
        console.log('success (resolve)', n);
        // make the success path go to the failure path
        if(n === 3) throw { code: 400, message: 'except 3, who is still evil' };
        return evenIsEvil(n+1);
    })
    .then(n => {
        console.log('how could this possible work?', n);
    })
    .catch(err => {
        console.log('failure (reject)', err);
        return 'is this the end?';
    })
    // remember that catch still returns a promise
    .then(console.log);