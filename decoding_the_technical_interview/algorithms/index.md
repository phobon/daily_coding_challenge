# Big O

## Constant Time: O(1)

Execute in the same time regardless of the amount of data

```
function sayHi() {
  return 'Hello world';
}
```

## Logarithmic Time: O(log n)

Size of the problem decreases each time it runs, like binary search

```
function binarySearch(list, item) {
  // If list is sorted in ascending order
  let low = 0;
  let high = list.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return true;
    }

    if (guess < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}
```

## Linear Time: O(n)

Mapping over an array, for loops, etc.

```
function linear(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

## Super Linear Time: O(n log n)

Less performant than linear time, but more performant than an exponential algorithm

Merge sort, and heap sort

```
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}
```

## Polynomial Time: O(n^2)

Performance is directly proportional to the square of the data size. Commonly found in algorithms using two nested for-loops, like bubble sort

Bubble sort compares every item in an array with every other item and swap them if the item on the left is greater than the item on the right

```
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Notice that j < (length - 1)
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare the adjacent positions
      if (arr[j] > arr[j + 1]) {
        // Swap the numbers
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

## Exponential Time: O(2^n)

Recursive functions like Fibonacci

```
function fibonacci(num) {
  if (num <= 1) {
    return num;
  }

  return fibonacci(num -1) + fibonacci(num - 2);
}
```

## Factorial Time: O(n!)

Worst performing algorithm because it grows rapidly as the size of n increases

Travelling Salesman - Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city and returns to the original city?