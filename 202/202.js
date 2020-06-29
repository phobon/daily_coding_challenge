// Good morning! Here's your coding interview problem for today.

// This problem was asked by Palantir.

// Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888. 678 is not a palindrome. Do not convert the integer into a string.

// Brute force
// Split the integer into an array and loop over first half of the array (odd means we can ignore the middle item, even means we split 50/50)
// For each index, take the length - count to get the corresponding item
// Check if they're equal
// If not, then it isn't a palindrome, if it is, move to the next item

// This is effectively O(n) but could potentially be big theta(log n)

const example1 = 121;
const example2 = 888;
const example3 = 678;
const example4 = 123454321;
const example5 = 12345678909987654321;

const isPalindrome = input => {
  const a = Array.from(String(input), Number);

  for (let i = 0; i < a.length / 2; i++) {
    const first = a[i];
    const second = a[a.length - 1 - i];

    if (first !== second) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(example1)); // true
console.log(isPalindrome(example2)); // true
console.log(isPalindrome(example3)); // false
console.log(isPalindrome(example4)); // true
console.log(isPalindrome(example5)); // false