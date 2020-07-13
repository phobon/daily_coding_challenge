// This problem was asked by Dropbox.

// Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

// Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

const alphabetLength = 26;

const alphabetMap = [
  null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

const process = (columnId) => {
  if (columnId < alphabetLength) {
    return alphabetMap[columnId];
  }

  const sequence = [0];
  let count = columnId;
  while (count > alphabetLength) {
    // We've iterated once, so we need to figure out where to increment
    let found = false;
    for (let i = sequence.length - 1; i > -1; i--) {
      if (sequence[i] === alphabetLength) {
        // Move onto the next column
        console.log(i, sequence[i], 'found');
        continue;
      }

      // Increment this number
      sequence[i] += 1;
      found = true;
    }

    // If we haven't found a match, we need to insert another column
    if (!found) {
      console.log('unshift');
      sequence.unshift(1);
    }

    count -= alphabetLength;
  }

  if (count > 0) {
    sequence.push(count);
  }

  return sequence.map(s => alphabetMap[s]).join('');
};

// console.log(process(1));
// console.log(process(2));
// console.log(process(3));

// console.log(process(27));
// console.log(process(28));
// console.log(process(29));

console.log(process(100));