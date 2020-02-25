// This problem was asked by Microsoft.

// A number is considered perfect if its digits sum up to exactly 10.

// Given a positive integer n, return the n-th perfect number.

// For example, given 1, you should return 19. Given 2, you should return 28.

// Get the number, split it then sum the numbers, if it's > 10 error, if it's less than 10, then add another digit, if it's > 10 then we can put 2 numbers that add up to it

function perfect(number) {
  const s = number.toString().split('');
  let sum = 0;
  for (const p of s) {
    sum += parseInt(p);
  }

  if (sum > 10) {
    throw `${sum} is > 10`;
  }

  if (sum < 10) {
    const remainder = 10 - sum;
    s.push(remainder);
  }

  return parseInt(s.join(''));
}

// console.log(perfect(1));
// console.log(perfect(2));
// console.log(perfect(3));
// console.log(perfect(4));
// console.log(perfect(5));

console.log(perfect(11));
