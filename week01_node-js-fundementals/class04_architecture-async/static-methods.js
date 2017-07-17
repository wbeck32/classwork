

class BitmapTransformer {
    constructor(buffer) {
        if(!buffer) throw new YouForgotTheBufferError();
        //...
    }

    transform(tranformation) {
        //...
    }

    writeFile(filename) {
        // use fs to write the file...
    }
}


BitmapTransformer.readFile = function(fileName) {
    const buffer = fs.readFileSync(fileName);
    return new BitmapTransformer(buffer);
}


module.exports = BitmapTransformer;