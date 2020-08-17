// Complete the hourglassSum function below.
function hourglassSum(arr) {
  // Iterate over every (x, y), determine if it's an hourglass
  // An index is an hourglass if x + 2 != null and y + 2 != null
  // We can assume the dimensions are equal here
  // If it's an hourglass, determine the sum, if it's higher than the previous best, then replace it

  // Determine the dimensions of the array, a 2D array in javascript is in the form:
  // [
  //    [1, 2, 3],
  //    [0, 2, 1],
  //    [0, 2, 1],
  // ]
  // So, the dimensions are basically the array length

  const dimensions = arr.length;
  const isHourGlass = (x, y) => (x + 2 < dimensions) && (y + 2 < dimensions);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sumHourGlass = (array, x, y) => {
      const values = [];

      values.push(array[y][x], array[y][x+1], array[y][x+2]);
      values.push(array[y+1][x+1]);
      values.push(array[y+2][x], array[y+2][x+1], array[y+2][x+2]);

      return values.reduce(reducer);
  }

  let max;
  for (let y = 0; y < arr.length; y++) {
      const row = arr[0];
      for (let x = 0; x < row.length; x++) {
          if (!isHourGlass(x, y)) {
              continue;
          }

          // Sum the hourglass.
          const sum = sumHourGlass(arr, x, y);
          if (max == null) {
            max = sum;
          } else if (sum > max) {
            max = sum;
          }
      }
  }

  return max;
}

const example = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

console.log(hourglassSum(example));