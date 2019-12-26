// This problem was asked by Facebook.

// Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

// Given that we can't store all of the elements in memory, it might be worth determining a random interval of items (say 5, or 8), then streaming items and storing each one along
// that probability.
// Once we reach the end of the stream, randomly pick an element that has been stored
// If we run out of memory, then we may have to increase the interval.

// Function to generate a random set of numbers.
const randomise = () => {
  // Determine a random number of entries.
  const entries = Math.random() * 100 * 1000; // Math.random() gets a number between 0-1, so multiply this by 100 to get an integer, then multiply by some arbitrary amount.
  
  const set = [];
  for (let i = 0; i < entries; i++) {
    set.push(i);
  }

  return set;
}