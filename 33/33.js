// This problem was asked by Microsoft.

// Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

// Recall that the median of an even-numbered list is the average of the two middle numbers.

// For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

// 2
// 1.5
// 2
// 3.5
// 2
// 2
// 2

// So we're looking for the average of the 2 middle numbers here, given the sample array
// [2] = 2 + 0 / 1 = 2
// [2, 1] = [1, 2] = 1 + 2 / 2 = 1.5
// [2, 1, 5] = [1, 2, 5] = 2
// [2, 1, 5, 7] = [1, 2, 5, 7] = 2 + 5 / 2 = 3.5
// [2, 1, 5, 7, 2] = [1, 2, 2, 5, 7] = 2
// [2, 1, 5, 7, 2, 0] = [0, 1, 2, 2, 5, 7] = 2
// [2, 1, 5, 7, 2, 0, 5] = [0, 1, 2, 2, 5, 2, 7] = 2

// Brute force can basically be:
// Sort the list from lowest to highest
// If the list if odd, take the middle number (length / 2 - 1)
// If the list if even, take the two middle numbers (length / 2 - 1, length / 2 + 1) and divide by two

function median(list) {
  if (list.length === 1) {
    return list[0];
  }

  const l = list.sort();
  if (l.length % 2 === 0) {
    const first = l[l.length / 2 - 1];
    const second = l[l.length / 2];

    return (first + second) / 2;
  } else {
    const first = l[Math.round(l.length / 2) - 1];
    console.log(first);
    return first;
  }
}

function runningMedians(list) {
  const running = [];
  const medians = [];
  for (let i of list) {
    running.push(i);
    medians.push(median(running));
  }

  return medians;
}

// runningMedians([2, 1, 5, 7, 2, 0, 5]);
console.log(runningMedians([2, 1, 5, 7, 2, 0, 5]));