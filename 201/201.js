// You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers. For example, [[1], [2, 3], [1, 5, 1]] represents the triangle:

//   1
//  2 3
// 1 5 1
// We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually ending with an entry on the bottom row. For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

// Write a program that returns the weight of the maximum weight path.

// Brute force
// Start at the first row, if the length of the array is 1, then it's the first item
// We can't sort the items because there are duplicates, and we need to retain the order and structure here
// Each index of an array can hit the same index of the next array, or index+1
// So for example, index 0 can traverse to index 0 and index 1 of the next array
// index 1 can traverse to index 1 and index 2 of the next array

// We can have a maximum of 2^n solutions, so as we're going through, we can push new solutions into an array as we go
// We can do it with a recursive function

const example1 = [[1], [2, 3]]; // Expected answer: 1 -> 3
const example2 = [[1], [2, 3], [1, 5, 1]]; // Expected answer: 1 -> 3 -> 5

const maxWeight = (level, current, index, array) => {
  const row = array[level];
  const next = array[level + 1];

  current
  process(0, [], [0, 1], arr);



  return current;
};

const process = (arr) => {
  const results = [];
  maxWeight(0, [], 0, arr);
};