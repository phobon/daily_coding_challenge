// This problem was asked by Google.

// The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

// Given two strings, compute the edit distance between them.

// kitten
// sitting
// Determine the difference in length between the two strings
// If the first string is longer, then there can be x possible deletions
// If the first string is shorter, then there can be x possible insertions

// Iterate over string and compare each character
// If they match, move onto the next one
// If they don't match, then we can see whether an insertion or deletion will get the desired result

// If we have some insertions we can do, then check the next index for equality
// If the next index matches, then insert the missing character

// If we have some deletions we can do, check the next index for equality
// If the next index matches, then delete the current character

// If neither of these result in a match, then do a replacement

function editDistance(s1, s2) {
  // If diff is positive, we have insertions, if it's negative we have deletions
  let diff = s1.length - s2.length;

  let distance = Math.abs(diff);
  for (let i = 0; i < s1.length; i++) {
    const c1 = s1[i];
    const c2 = s2[i];

    if (c1 === c2) {
      // We have a match, so move onto the next index
      continue;
    }

    if (diff === 0) {
      // This is a substitution, so increment distance by 1
      distance++;
      s2[i] = s1[i];
      continue;
    }

    if (diff > 0) {
      // We can do an insertion, so check the next index
      const c3 = s2[i + 1];
      if (c1 === c3) {
        diff--;
        distance++;
        s2 = s2.slice(0, i) + s1[i] + s2.slice(i + 1);
      }
    } else {
      // We can do an insertion, so check the next index
      const c3 = s2[i + 1];
      if (c1 === c3) {
        diff++;
        distance++;
        s2 = s2.slice(0, i - 1) + s2.slice(i + 1);
      }
    }
  }

  return distance;
}

console.log(editDistance('kitten', 'sitting'));
console.log(editDistance('kiatten', 'sittingi'));