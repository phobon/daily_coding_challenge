// This problem was asked by Yelp.

// Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

// For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].

// This sounds a bit like a cartesian coordinate problem
// Probably the easiest way - and this would be a brute-force way of doing it
// Is to take the input string, split it so we have an array of characters: '23' = ['2', '3']
// We really want something like the following as outputs in order

/*
  ad
  ae
  af
  bd
  be
  bf
  cd
  ce
  cf
*/

// So it's safe to say that whatever the last character in that string is will need to be repeated for every item before it
// a1 a2 a3 b1 b2 b3 c1 c2 c3

// If we had more characters, we'd want to do the same for each pair
// Get the character at index 0
// Check the previous one, if it's -1 then continue
// We essentially want to return pairs
// So if we have '23', then return the product of pair 'null' and '2'
// Then return the product of pair '2' and '3'
// We can expand that if it was '234' for example:
//  null, 2
//  2, 3
//  3, 4

const mappedItems = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
};

function mapped(input, map) {
  const output = [];

  const splitInput = input.split('');
  const current = [];

  function backtrack(combination, next) {
    if (next.length === 0) {
      
    }
  }
}

console.log(mapped('23'));