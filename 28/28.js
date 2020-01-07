// This problem was asked by Palantir.

// Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

// More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

// If you can only fit one word on a line, then you should pad the right-hand side with spaces.

// Each word is guaranteed not to be longer than k.

// For example, given the list of words ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'] and k = 16, you should return the following:

// ['the  quick brown', # 1 extra space on the left
// 'fox  jumps  over', # 2 extra spaces distributed evenly
// 'the   lazy   dog'] # 4 extra spaces distributed evenly

// Brute force...
// Iterate through the array and sum up the length
// The length should be k-number of items (to add spaces)
// Determine how many spaces are left over, then divide by the number of words
// Join the items with the number of spaces, truncating down

function doesWordFitOnLine(word, line, length) {
  const lines = line.join(' ');
  const l = lines.length + word.length;
  return l < length;
}

function distributeSpaces(line, length) {
  const lines = line.join(' ');

  // Get the remaining number of spaces after we distribute a single space
  let remaining = length - lines.length;
  if (line.length === 1) {
    const l = line[0];
    line[0] = l.padEnd(l.length + remaining);
    remaining = 0;
  }

  while (remaining > 0) {
    for (let i = 1; i < line.length; i++) {
      line[i] = ` ${line[i]}`;
      remaining--;

      if (remaining === 0) {
        break;
      }
    }
  }

  return line.join(' ');
}

function justify(words, length) {
  const justified = [];
  let current = [];
  for (let word of words) {
    if (doesWordFitOnLine(word, current, length)) {
      current.push(word);
    } else {
      // Add the extra space in and add the line
      justified.push(distributeSpaces(current, length));
      current = [word];
    }
  }

  if (current.length > 0) {
    justified.push(distributeSpaces(current, length));
  }

  return justified;
}

console.log(justify(['test', 'blah', 'something'], 10));
console.log(justify(['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'], 16));