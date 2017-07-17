
function countWords(sentence) {
    const words = sentence.toLowerCase().split(' ');
    const dict = {};

    words.forEach(word => {
        if(dict[word]) {
            dict[word] = dict[word] + 1;
        }
        else {
            dict[word] = 1;
        }
    });

    return dict;
}