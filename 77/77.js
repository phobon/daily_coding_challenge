// This problem was asked by Snapchat.

// Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

// The input list is not necessarily ordered in any way.

// For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].

// Brute force
// Create an object keyed to each interval
// For each interval, check each other interval
// If the checked interval's lower bounds is > the initial's lower bounds and
// If the checked interval's upper bounds is < the initial's upper bounds
// It should be merged, so increment its value in the object
// Iterate over the object and find items with 0, push them into a list and return

// This is O(n^2 - 1) which isn't super efficient

// Can we assume that the intervals fully overlap?

// Order the list to start with, so all of the intervals are in order (based on lower bounds)
// For every interval, check the left:
// If the lower bounds is < upper bounds of the left, then they overlap, so strike this out
// If we haven't struck it out, check the right:
// If the upper bounds is > lower bounds of the right, then they overlap, so strike this out
// If no overlaps, push it into the output array

// This would be O(1)

const example = [
  [1, 3],
  [5, 8],
  [4, 10],
  [20, 25],
];

function overlap(input) {
  const output = [];
  input.sort((a, b) => {
    const first = a[0];
    const second = b[0];
    if (first < second) {
      return -1;
    }
    if (second > first) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    if (i === 0) {
      const next = input[i + 1];
      if (current[1] < next[0]) {
        output.push(current);
      }
      continue;
    }

    if (i === input.length - 1) {
      // We've already checked whether this overlaps now, so add to the list.
      output.push(current);
      continue;
    }

    const prev = input[i - 1];
    if (current[0] < prev[1]) {
      // We have an overlap here, so check the other bounds to see if it fully overlaps
      if (current[1] < prev[1]) {
        continue;
      }
    }

    const next = input[i + 1];
    if (current[1] > next[0]) {
      // We have an overlap here, so check the other bounds to see if it fully overlaps
      if (current[1] < next[1]) {
        continue;
      }
    }

    output.push(current);
  }

  return output;
}

console.log(overlap(example));