// This problem was asked by Facebook.

// You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

// Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

// For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

// Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.

// So to illustrate this:
// [2, 1, 2] gives us a wall like this:
// - -
// ---
// ===

// [3, 0, 1, 3, 0, 5] gives us a wall like this:
//       -
//       -
//  -  - -
//  -  - -
//  - -- -
//  ======

// So, technically we can fit: [0, 3, 2, 0, 3, 0] units of water

// So, to figure this out, take each index and compare left and right
// If left is null consider this an end wall, so move to the next
// If right is null consider this an end wall, so we're done
// If left is not null and right is not null then find the largest difference between index and left or right - this is the amount of water it can hold
// Continue until done

function waterLevels(a) {
  let water = 0;

  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (i - 1 < 0) {
      continue;
    }

    if (i + 1 === a.length) {
      break;
    }

    if (a[i - 1] < a[i]) {
      // If left wall is smaller than current
      diff = a[i + 1] - a[i];
    } else {
      // Compare against right wall
      diff = a[i - 1] - a[i];
    }

    water += diff >= 0 ? diff : 0;
  }

  return water;
}

console.log(waterLevels([2, 1, 2]));
console.log(waterLevels([3, 0, 1, 3, 0, 5]));