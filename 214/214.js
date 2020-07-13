// This problem was asked by Stripe.

// Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

// For example, given 156, you should return 3.

// So, 156 in binary is going to be...
// We can divide a number by 2 to determine whether it is whole or not, if it is, then it is represented by 0, if there's remainder, we represent it with a 1

// Therefore, 156:
// 156 / 2 = 78 with 0 remainder
// 78 / 2 = 39 with 0 remainder
// 39 / 2 = 19 with 1 remainder
// 19 / 2 = 9 with 1 remainder
// 9 / 2 = 4 with 1 remainder
// 4 / 2 = 2 with 0 remainder
// 2 / 2 = 1 with 0 remainder
// 1 / 2 = 0 with 1 remainder

// This gives us 10011100 representation in binary
// From here we can determine how many consecutive 1s there are = 3

// So, as we're determining what a number is in binary, keep a counter and a high score for consecutive 1s

const consecutiveOnes = value => {
  let count = 0;
  let highScore = 0;
  let runningTotal = value;

  const binary = [];

  while (runningTotal > 0) {
    if (runningTotal % 2 === 0) {
      count = 0;
      binary.unshift(0);
    } else {
      count += 1;
      binary.unshift(1);
    }

    runningTotal = Math.trunc(runningTotal / 2);

    if (count > highScore) {
      highScore = count;
    }
  }

  console.log(binary.join(''));

  return highScore;
};

console.log(consecutiveOnes(28));
console.log(consecutiveOnes(156));
console.log(consecutiveOnes(255));