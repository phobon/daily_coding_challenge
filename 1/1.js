// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

// Iterate through the list
// For each i, find the difference between k and i
// Determine if that remainder exists in the rest of the list

const addNumbers = (list, k) => {
  for (let i = 0; i < list.length; i++) {
    const value = list[i];
    const remainder = k - value;

    if (list.indexOf(remainder) > -1) {
      return true;
    }
  }

  return false;
};

console.log(addNumbers([10, 15, 3, 7], 17));
console.log(addNumbers([10, 15, 3, 7], 1));
console.log(addNumbers([10, 15, 3, 7], 10));

console.log(addNumbers([-8, 17, 4, -5], 21));
console.log(addNumbers([-8, 17, 4, -5], -4));
console.log(addNumbers([-8, 17, 4, -5], -13));
