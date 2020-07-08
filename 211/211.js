// Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string "abracadabra" and the pattern "abr", you should return [0, 7].

// Brute force

// Use a while loop and an index counter to understand where in the string we are
// We can use string.indexOf to determine where an instance of a pattern
// If we do an indexOf and it returns -1, we can return at this point because the pattern doesn't exist
// Use an index counter to figure out where we need to start
// Every indexOf call starts at the index + length of pattern
// Keep going until we reach the length of the string

const example = 'abracadabra';
const example2 = 'abracadabraabracadabraabracadabraabracadabraabracadabra';
const example3 = 'asdfasdfadsf123ffffoajsdfjaosdjfoajdfoajsdf123jjjasdad123';

const findPattern = (example, pattern) => {
  const sequence = [];

  let index = 0;
  while (true) {
    const i = example.indexOf(pattern, index);
    if (i === -1) {
      // No more instances can be found, so return here.
      break;
    }

    // We've found an instance, so add the index to the array
    sequence.push(i);

    // Increment the index by the length of the pattern
    index = i + pattern.length;

    if (index >= example.length) {
      // We've reached the end of the sequence, so return here.
      break;
    }

  }

  return sequence;
};

console.log(findPattern(example, 'abr'));
console.log(findPattern(example2, 'abr'));
console.log(findPattern(example3, '123'));