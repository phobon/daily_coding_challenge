// Without using .flat(), create a function to flatten an array

// function flatten(arr) {
//   const flatArray = [];

//   arr.forEach(a => {
//     if (Array.isArray(a)) {
//       flatArray.push(...flatten(a));
//     } else {
//       flatArray.push(a);
//     }
//   });

//   return flatArray;
// }

function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.concat(flatten(item));
    } else {
      acc.push(item);
    }

    return acc;
  }, []);
}

const exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
console.log(flatten(exampleArray));