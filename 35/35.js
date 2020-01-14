// This problem was asked by Google.

// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

// If we can only swap an array, then we have to do things a little bit more interestingly
// If we come across an R, we can swap it with a G, or a B
// If we come across a G, we can swap it with an B
// If we come across a B, we can't swap it

// If we keep an object that has the last known instance of a particular character and its index
// So, { R: 0, G: 2, B: undefined }
// When we don't have an index, this can be undefined or null
// When we reach a character that can be swapped, determine which item it can be swapped with and do that
// This _should_ sort items in place

// We could get to each index and compare it to whatever is on the left
// If it's an R, if whatever to the left is not an R then swap it
// If it's a G, if whatever to the left of it is not an R or a G then swap it
// If it's a B, then leave it where it is

// For each index, check forward until we find a character that should be ahead of it
// If it's a G, then check til we reach an R, then swap it
// If it's a B, then check til we reach an R, or a G

// function sortRGB(list) {
//   for (let i = 0; i < list.length; i++) {
//     const current = list[i];
//     const currentList = [...list];
//     switch (current) {
//       case 'R':
//         // Don't worry about this for now, it should be swapped with others
//         for (let x = 0; x < list.length; x++) {
//           const n = list[x];
//           if (n === 'R') {
//             continue;
//           }

//           // Swap if there's a G or a B
//           if (n === 'G' || n === 'B') {
//             list[i] = n;
//             list[x] = current;
//             break;
//           }
//         }
//         break;
//       case 'G':
//         for (let x = 0; x < list.length; x++) {
//           const n = list[x];
//           if (n === 'R' || n === 'G') {
//             continue;
//           }

//           // Only swap if there's a B
//           if (n === 'B') {
//             list[i] = n;
//             list[x] = current;
//             break;
//           }
//         }
//         break;
//       case 'B':
//         // for (let x = 0; x < list.length; x++) {
//         //   const n = list[x];
//         //   if (n === 'B') {
//         //     continue;
//         //   }

//         //   if (n === 'G' || n === 'R') {
//         //     list[i] = n;
//         //     list[x] = current;
//         //     break;
//         //   }
//         // }
//         break;
//     }
//     console.log(i, current, currentList, list);
//   }

//   return list;
// }

// Go through the array 3 times, starting with R, then G, then B
// With R, increment a counter to determine the index we're currently up to with swaps
// With G, any swaps we do are at the index we previously counted
// With B, there shouldn't be any swaps required

function sortRGB(list) {
  const chars = ['R', 'G', 'B'];
  let counter = 0;
  for (let c of chars) {
    for (let i = 0; i < list.length; i++) {
      const current = list[i];
      if (current === c) {
        const prev = list[counter];
        list[counter] = current;
        list[i] = prev;
        counter++;
      }
    }
  }

  return list;
}

console.log(sortRGB(['G', 'B', 'R', 'R', 'B', 'R', 'G']));