// Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.

// Brute force
// If you did it all in place, you would iterate over the count in a for loop
// Effectively pop the first item off the list (store in a temporary array)
// Shift each of the items -1 then put the stored item in the last index of the array

const arr = [0, 1, 2, 3, 4, 5];

const rotateArray = (inputArr, count) => {
  const returnArr = [...inputArr];
  for (let i = 0; i < count; i++) {
    const temp = returnArr[0];
    for (let x = 1; x < returnArr.length; x++) {
      returnArr[x - 1] = returnArr[x];
    }
    returnArr[returnArr.length - 1] = temp;
  }
  return returnArr;
};

console.log(rotateArray(arr, 2)); // [2, 3, 4, 5, 0, 1]
console.log(rotateArray(arr, 4)); // [4, 5, 0, 1, 2, 3]