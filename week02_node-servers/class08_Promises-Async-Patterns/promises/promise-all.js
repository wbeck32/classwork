
function getUser(userId) {
    // return db.get('user', userId);
    return Promise.resolve({ name: 'Mark', email: 'mark@newco.com' });
}

function getGroupFor(userId) {
    // return db.get('group', userId);
    return Promise.resolve({ name: 'admin', level: 'super' });
}

function dbWork(userId) {
    return Promise.all([
        getUser(userId),
        getGroupFor(userId)
    ])
        .then(([ user, group ]) => {
            console.log(user);
            console.log(group);
            // const user = results[0];
            // const group = results[1];
            // do something with user and group...

        });
}

dbWork(123).catch(console.log);
