const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp')

module.exports = class Store {
    constructor(root) {
        this.root = root;
        mkdirp(root, err => {
            if(err) console.log(err);
        });
    }

    save(object, callback) {
        const filename = path.join(this.root, 'test');

        // do REAL implementation here...

        // this is here for now to make sure 
        // we have access to the directory
        // create my mkdirp
        fs.writeFile(filename, 'contents', err => {
            if(err) return callback(err);
            callback(null, object);
        });
    }
}