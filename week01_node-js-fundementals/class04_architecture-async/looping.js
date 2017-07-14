// const pixels = buffer.slice(pixelOffset);
const length = 10;

for(let i = 0; i < length; i = i + 3) {
    console.log({ 
        b: i, 
        g: i + 1, 
        r: i + 2 
    });
}