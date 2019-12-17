// Why is `o === obj` true?

const obj = {};
(o => o === obj)(obj); // true

// Function arguments are always passed by reference

// `===` does a deep equality check on objects, and the two objects match

// Objects are passed by reference to function arguments
// ^^^

// `===` does a shallow equality check on objects, and the two objects match