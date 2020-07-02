// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.

// For example, given [5, 7, 10, 3, 4], return 3.

// Because the array is sorted, we can make some assumptions about any index that is chosen:

// If index n-1 > n, then n is the minimum
// If index n+1 < n, then n+1 is the minimum
// So, we could basically start from the middle of the array, check n-1, if it's < n then n is not the minimum
// Then check n+1, and if n > n+1, n+1 is in the minimum

// If neither n, nor n+1 is the minimum, we can strike both of them out and we don't have to evaluate them anymore (this gives us the O(log n))

// Depending on the size of the array, we could start at the middle, evaluate those around it, then skip either to n+2 or n-2 and re-evaluate from there, this should always give us the result

const example = [5, 7, 10, 3, 4]; // 3 is the minimum

const process = (array) => {
  // Get the starting point of the array
  let i;
  if (array.length % 2 === 0) {
    // Even
    i = array.length / 2;
  } else {
    i = (array.length - 1) / 2;
  }

  let current = array[i];
  let previous = array[i - 1];

  let currentCounter = 0;
  while (previous) {
    console.log('previous', current, previous);
    if (previous > current) {
      return current;
    }

    currentCounter += 1;

    current = array[current - currentCounter];
    previous = array[i - (currentCounter + 1)];
  }

  currentCounter = 0;
  current = array[i];
  let next = array[i + 1];

  while (next) {
    console.log('next', current, next);
    if (next < current) {
      return next;
    }

    currentCounter += 1;

    current = array[i + currentCounter];
    next = array[i + (currentCounter + 1)];
  }

  // If we reach this point, assume the last index is the minimum.
  return array[array.length - 1];
}

console.log(process(example));