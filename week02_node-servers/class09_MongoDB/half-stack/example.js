const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/meow';

// Use connect method to connect to the server
MongoClient.connect(url).then(db => {
    const cats = db.collection('cats');
    cats.insert({ name: 'jumbo', type: 'abyssinian' })
        .then(result => console.log(result));

    // cats.find({}).toArray()
    // .then(response => {
    //     console.log(response);
    // });
}).catch(console.log);
