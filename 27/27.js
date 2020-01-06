// This problem was asked by Facebook.

// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

// For example, given the string "([])[]({})", you should return true.

// Given the string "([)]" or "((()", you should return false.

// So, we're looking for ( ... ) [ ... ] { ... }
// If these are balanced, then we can assume that their order matches
// ([{([{}])}]) will be true
// ([[{({})}]}) will be false
// Basically we can start with the first character, find the index and then check the reverse index (length - i). If it matches, then continue, if it doesn't then don't

// const bracketMatches = {
//   '[': ']',
//   '(': ')',
//   '{': '}',
// };

// function bracketMatcher(brackets) {
//   const split = brackets.split('');
//   const length = split.length - 1;
//   for (let i = 0; i < split.length / 2; i++) {
//     const c = bracketMatches[split[i]];
//     const n = split[length - i];
//     console.log(c, n);
//     if (c !== n) {
//       return false;
//     }
//   }

//   return true;
// };

// For this to be true, there should be the same number of opening and closing brackets, if there aren't then return false
// We can take the index, then go through the rest of the characters until we find a closing bracket
// If we have an odd number of characters between opening and closing brackets, then this is false
// If it satisfies all of these conditions, then we can start to check each of the pairs

const openingBrackets = ['[', '(', '{'];
const closingBrackets = [']', ')', '}'];

const bracketMatches = {
  '[': ']',
  '(': ')',
  '{': '}',
};

function bracketMatcher(allBrackets) {
  // If length of string isn't even, this must be false.
  if (allBrackets.length % 2 !== 0) {
    console.log('string length is odd')
    return false;
  }

  // If we don't have the same number of opening and closing brackets, this must be false.
  for (let i = 0; i < openingBrackets.length; i++) {
    const left = (allBrackets.match(new RegExp(`\\${openingBrackets[i]}`, 'g')) || []).length;
    const right = (allBrackets.match(new RegExp(`\\${closingBrackets[i]}`, 'g')) || []).length;

    if (left !== right) {
      console.log(`opening bracket: ${openingBrackets[i]} doesn't match closing bracket: ${closingBrackets[i]}`)
      return false;
    }
  }

  // Iterate over the list to see if we have matches
  const brackets = allBrackets.split('');
  const usedIndexes = [];
  for (let i = 0; i < brackets.length; i++) {
    const c = brackets[i];

    if (usedIndexes.indexOf(i) !== -1) {
      continue;
    }

    usedIndexes.push(i);
    const match = bracketMatches[c];
    let count = 0;
    for (let v = i + 1; v < brackets.length; v++) {
      const n = brackets[v];
      if (usedIndexes.indexOf(v) !== -1) {
        continue;
      }

      if (n === match) {
        if (count % 2 === 0) {
          usedIndexes.push(v);
          break;
        } else {
          console.log(n, match, count)
          return false;
        }
      }

      count++;
    }
  }

  return true;
}

console.log(bracketMatcher('([)]'));
console.log(bracketMatcher('((()'));
console.log(bracketMatcher('([])[]({})'));