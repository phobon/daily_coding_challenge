// This problem was asked by Google.

// Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

// For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].

// To brute force this, we could iterate over every index and then every other index to see if i % j or j % i === 0
// If we get an i % j > 0, then i can immediately be struck out, j is still a candidate, so we can move onto that
// If we have an i, where every % === 0, then we can safely put that in the return set

// This is probably O(n log n) time, as we will have to at least go over every item in the set, and then check a subset of items

const exampleSet = [3, 5, 10, 20, 21]; // returns [5, 10, 20]
const exampleSet2 = [1, 3, 6, 24]; // returns [1, 3, 6, 24]

const processSet = set => {
  const matches = {};

  for (let i = 0; i < set.length; i++) {
    const first = set[i];
    matches[first] = [];
    
    for (let j = 0; j < set.length; j++) {
      const second = set[j];

      // If these don't match the condition, break out
      if (first % second === 0 || second % first === 0) {
        matches[first].push(second);
      }
    }
  }

  let returnSet;
  for (const k of Object.keys(matches)) {
    const v = matches[k];
    if (!returnSet) {
      returnSet = v;
      continue;
    }

    if (v.length > returnSet.length) {
      returnSet = v;
    }
  }

  return returnSet;
}

console.log(processSet(exampleSet));
console.log(processSet(exampleSet2));