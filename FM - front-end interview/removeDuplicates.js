function removeDuplicates(input) {
  // Create an array by splitting the string at spaces ' '
  const inputArray = input.split(' ');

  const dictionary = {};
  const output = [];
  for (const a of inputArray) {
    const lowerA = a.toLowerCase();
    if (dictionary[lowerA]) {
      continue;
    }

    dictionary[lowerA] = 1;
    output.push(a);
  }  

  return output.join(' ');
}

function removeDuplicates(input) {
  const arr = input.split(' ');

  // A set is an array that cannot have duplicates. INTERESTING
  // If something says unique values - use a set!
  const set = new Set(arr);

  const newString = [...set].join(' ');
  return newString;
}

const str = 'This is is a test test string';
console.log(removeDuplicates(str));