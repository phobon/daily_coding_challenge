// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

// brute force approach
// Iterate over the first list to find i
// Iterate over the list again, ignoring i to get k
// Multiply the i and k
  // Does it matter if the number is 0?
  // If it's 0, then the product will always be 0... do we skip it or just expect the output to be 0?
// Store the product in the same index of the array
// Return the array

const products = (list) => list.map((value, i) => {
  if (value === 0) {
    return value;
  }

  let product = 1;

  for (let k = 0; k < list.length; k++) {
    if (k === i) {
      continue;
    }
    
    const second = list[k];
    if (second === 0) {
      product = 0;
      break;
    }

    product *= second;
  }

  return product;
});

console.log(products([1, 2, 3, 4, 5]));
console.log(products([3, 2, 1]));