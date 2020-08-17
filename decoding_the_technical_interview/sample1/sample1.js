// Given an array containing a list of animal objects, return a new array containing only the animals which are mammals.

// Each animal object contains an animal name (i.e. dog or snake) and a value, mammal, which is a boolean indicating whether the animal is a mammal.

// What Skills Does This Test?
// • Iterating through an array
// • Accessing properties of an object

const animals = [
  {
    type: 'Dog',
    mammal: true,
  },
  {
    type: 'Snake',
    mammal: false,
  },
  {
    type: 'Cheetah',
    mammal: true,
  },
];

// Brute force - iterate over the entire list, create a new array and push items to it
// Can do it with .map, .forEach, .reduce, item of array, etc.
// With .map you'd probably use a filter at the end

const mammals = (a) => {
  const result = [];
  for (const animal of a) {
    if (animal.mammal) {
      result.push(animal);
    }
  }

  return result;
}

console.log(mammals(animals));