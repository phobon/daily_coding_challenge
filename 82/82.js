// This problem was asked Microsoft.

// Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

// For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.

// Class or an object
// constructor takes in the input and stores it
// Then we can have a function on that class called readN(n) n === number of characters to read
// When we call readN(n), it slices the input and returns whatever that is
// So if we call something like .readN(7) 3 times on 'Hello world', we should be able to get the results we want

class Reader {
  constructor(input) {
    this.input = input;
  }

  readN(n) {
    const readCharacter = this.input.slice(0, n);
    
    // Modify the original string.
    this.input = this.input.substring(n);

    // Return the sliced part.
    return readCharacter;
  }

  read7() {
    return this.readN(7);
  }
}

const s = 'Hello world';

const reader = new Reader(s);
console.log(reader.read7());
console.log(reader.read7());
console.log(reader.read7());