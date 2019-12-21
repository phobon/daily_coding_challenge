// This problem was asked by Twitter.

// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

// A brute force solution could be whenever a query string comes in, iterate over the set of all possible strings and add those to an array

// We could get the possible querystrings and split them up, then create a dictionary with some possible keys:
// [dog, deer, deal] could be preprocessed into: { d: [dog, deer, deal], do: [dog], de: [deer, deal], dog: [dog], deer: [deer], deal: [deal] }
// Then we could see if that key exists; if it doesn't then return null.
// This would mean we wouldn't have to loop every time an input came in, just do a simple hash lookup

class Autocomplete {
  constructor(allPossibleStrings) {
    this.hash = {};
    this.allPossible = allPossibleStrings;
    this.process();
  }

  process() {
    this.allPossible.forEach(a => {
      const split = a.split('');
      let current = '';
      for (const c of split) {
        current += c;
        if (this.hash[current]) {
          this.hash[current].push(a);
        } else {
          this.hash[current] = [a];
        }
      }
    })
  }

  query(input) {
    return this.hash[input];
  }
}

const autoComplete = new Autocomplete(['dog', 'deer', 'deal']);
console.log(autoComplete.query('d'));
console.log(autoComplete.query('de'));
console.log(autoComplete.query('dog'));
console.log(autoComplete.query('crazy'));

