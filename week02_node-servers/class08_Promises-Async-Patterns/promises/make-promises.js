

function waitFiveSeconds() {
    return new Promise((resolve, reject) => {
        const ms = 5000;
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

waitFiveSeconds().then(wait => {
    console.log('you waited', wait, 'ms');
});