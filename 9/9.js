// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

// Position is important, so we can't reorder the array
// For an array of size 3 or more, we can figure out how many possible answers we have
// [a, a, a] = 1 possible answer (pairs)
// [a, a, a, a] = 3 possible answers (pairs)
// [a, a, a, a, a] = 1 possible answer (triplets), 6 possible answers (pairs)
// [a, a, a, a, a, a] = 1 possible answer (triplets), 10 possible answers (pairs)

const largestSum = (list) => {
  for (let i = 0; i < list.length; i++) {
    
  }
}