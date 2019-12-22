// This problem was asked by Amazon.

// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

// If a staircase has more than 0 steps, then it can be climbed up 1 step at a time
// If a staircase has more than 1 step, then it can be climbed at least 1 step at a time or 2 steps at a time
// Determine whether the first step can be climbed in either 1 or 2 step increments
// For the remainder steps, do the same thing; see if it can be climbed in either 1 or 2 step increments
// If a step can be climbed in 1 or 2 step increments, then increment by 2
// If a step can only be climbed in 1 step increments, then increment by 1
// Subtract remainder from the total

// const staircase = n => {
//   if (n < 1) {
//     // There are 0 ways this can be traversed.
//     return 0;
//   }

//   if (n === 1) {
//     // There is only one way that this can be traversed
//     return 1;
//   }

//   if (n === 2) {
//     return 2;
//   }

//   // If n is > 2, that means that we can either have 1, or 2 here; so check both of those.
//   let count = 0;
//   count += staircase(n - 1);
//   count += staircase(n - 2);

//   return count;
// }

// console.log(`result: ${staircase(1)}`);  // 1
// console.log(`result: ${staircase(2)}`);  // 1, 1 or 2
// console.log(`result: ${staircase(3)}`);  // 1, 1, 1 or 2, 1 or 1, 2
// console.log(`result: ${staircase(4)}`);  // 1, 1, 1, 1 or 2, 1, 1 or 1, 2, 1, or 1, 1, 2 or 2, 2

// console.log(`result: ${staircase(5)}`);
// 1, 1, 1, 1, 1
// 2, 1, 1, 1
// 1, 2, 1, 1
// 1, 1, 2, 1
// 1, 1, 1, 2
// 2, 2, 1
// 2, 1, 2
// 1, 2, 2

const staircase = (n, possible) => {
  if (n === 0) {
    return 1;
  }

  let count = 0;

  for (const p of possible) {
    if (n - p >= 0) {
      count += staircase(n - p, possible);
    }
  }

  return count;
}

console.log(`result: ${staircase(1, [1, 3, 5])}`);  // 1
console.log(`result: ${staircase(2, [1, 3, 5])}`);  // 1, 1
console.log(`result: ${staircase(3, [1, 3, 5])}`);  // 1, 1, 1 or 3
console.log(`result: ${staircase(4, [1, 3, 5])}`);  // 1, 1, 1, 1 or 3, 1 or 1, 3
console.log(`result: ${staircase(5, [1, 3, 5])}`);  // 1, 1, 1, 1, 1 or 3, 1, 1 or 1, 3, 1 or 1, 1, 3 or 5