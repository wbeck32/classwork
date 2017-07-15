const count = 100000;

//this isn't as fast because pop removes the item from the end of the
//array. To remove the item at the beginning we'd have to use shift
//which is a total time-suck.

const dups = arr,
  for (var i = 0; i < count; i++) {
    arr[i] = `hello ${i}`;
    dups[i] = `hello ${i}`;

  }

function findDups(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === dups[0]) return true;
    else dups.pop(); //oooooops!
  };
  return false;

};
console.log('count', count);
console.time('find dups');
console.log(findDups(arr));
console.timeEnd('find dups');
