// Complete the rotLeft function below.
function rotLeft(a, d) {
  // Can do left rotations with splice and push
  // Do a slice to get the first item of the array, then push it onto the end

  for (let i = 0; i < d; i++) {
      const first = a[0];
      a.splice(0, 1);
      a.push(first);
  }

  return a;
};

console.log(rotLeft([1, 2, 3, 4, 5], 4)); // [5, 1, 2, 3, 4]