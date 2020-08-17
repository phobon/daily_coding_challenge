// This problem was asked by Bloomberg.

// There are N prisoners standing in a circle, waiting to be executed. The executions are carried out starting with the kth person, and removing every successive kth person going clockwise until there is no one left.

// Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

// For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.

// Bonus: Find an O(log N) solution if k = 2.

// Brute force
// If we have N and k, we can have a counter - a current index
// Create an array with N items in it
// Every time an item is struck out, turn it from a 0 to a 1, or something to indicate it shouldn't be considered again
// When we start, increment the counter by k, if we go above the size of N, then we can wrap around and start from the beginning
// Presumably, when a prisoner is remove, the number decrements until it reaches 1, then we have the final result

// So, if N = 5 and k = 3 the order would be: [3, 1, 5, 2, 4]

const executions = (n, k) => {
  const a = Array(n).fill(0);
  const result = [];

  counter = -1;
  while (result.length < n) {
    let incrementor = k;
    while (incrementor > 0) {
      incrementor -= 1;
      if (counter + 1 > n) {
        counter = 0;
      } else {
        counter += 1;
      }

      while (a[counter] !== 0) {
        if (counter + 1 > n) {
          counter = 0;
        } else {
          counter += 1;
        }
      }
    }

    result.push(counter + 1);
    a[counter] = 1;
  }

  return result;
};

console.log(executions(5, 2));
console.log(executions(5, 3));