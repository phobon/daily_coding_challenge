// This problem was asked by Amazon.

// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

// For some more examples, look at the string "abcbcba" and k = 2
// Answer is "bcbcb"
// "abcbcba" and k = 3
// Answer is "abcbcba" because it contains all of those characters

// As a really simple answer, could split the string into an array
// iterate through the array and count the number of unique characters there are
// So, a = 1, b = 2, c = 3
// At this point, the longest answer we have is "ab", so store that then go to the next index
// So, b = 1, c = 2, b = 3, c = 4, b = 5, a = 6
// At this point, the longest answer we have is "bcbcb", so move onto the next index
// If the length of the current answer >= number of items left, then we've found the answer, so return it
// otherwise continue to process the string

// I wonder if you could do this using a regex..

const distinctCharacters = (s, k) => {
  // Split the string into an array so we can iterate over it.
  const items = s.split('');

  let best = '';
  for (let i = 0; i < items.length; i++) {
    const remaining = items.length - best.length;
    if (remaining <= best.length) {
      break;
    }

    const possible = [items[i]];
    const current = [items[i]];
    for (let v = i + 1; v < items.length; v++) {
      const next = items[v];

      if (possible.indexOf(next) === -1) {
        if (possible.length + 1 > k) {
          break;
        } else {
          possible.push(next);
          current.push(next);
        }
      } else {
        current.push(next);
      }
    }

    if (current.length > best.length) {
      best = current.join('');
    }
  }

  return best;
};

console.log(distinctCharacters('abcba', 2));

console.log(distinctCharacters('aaabbbaaabbbcccddd', 1));
console.log(distinctCharacters('aaabbbaaabbbcccddd', 2));
console.log(distinctCharacters('aaabbbaaabbbcccddd', 3));
console.log(distinctCharacters('aaabbbaaabbbcccddd', 4));