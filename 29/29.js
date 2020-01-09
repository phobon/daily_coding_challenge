// This problem was asked by Amazon.

// Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

// Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

// Brute force solution would be:
// Could just go through the string and check the index and the one next to it, if they're different just add a _
// At the end split on that character to get an array, then reduce it to get the encoded string

// To decode a string, could just do the same sort of thing to split up the string
// Take the last index as the character, then parse the rest as a number
// reduce and return the decoded string

function encode(s) {
  const split = [];
  let firstIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];
    if (current !== next) {
      split.push(s.substring(firstIndex, i + 1));
      firstIndex = i + 1;
    }
  }

  return split.reduce((previous, current, i) => i === 1
      ? `${previous.length}${previous[0]}${current.length}${current[0]}`
      : `${previous}${current.length}${current[0]}`);
}

function isNumber(str) {
  return str.match(/[0-9]/) !== null;
}

function decode(s) {
  const split = [];
  let firstIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (!isNumber(current)) {
      // We've found a letter, so we should be able to decode this string
      const count = parseInt(s.substring(firstIndex, i));
      split.push(current.padEnd(count, current));
      firstIndex = i + 1;
    }
  }

  return split.join('');
}

console.log(decode(encode('AAAABBBCCDAA')));