// A permutation can be specified by an array P, where P[i] represents the location of the element at i in the permutation. For example, [2, 1, 0] represents the permutation where elements at the index 0 and 2 are swapped.

// Given an array and a permutation, apply the permutation to the array. For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0], return ["c", "b", "a"].

// So, we could _really_ easily do this by iterating over the permutation map, and push values from the source array into a new array
// This would give us O(n) but also would require some extra space to store new values

// If we were to try and do it in place, we can't assume that elements will be swapped in a permutation, so we can't always assume a nice mapping like [2, 1, 0] - we might have a mapping like [1, 2, 0]
// 

// Not in-place
const example = ['a', 'b', 'c'];

const applyPermutation = (a, p) => {
  const returnArr = [];

  for (const i of p) {
    returnArr.push(a[i]);
  }

  return returnArr;
};

console.log(applyPermutation(example, [2, 1, 0]));