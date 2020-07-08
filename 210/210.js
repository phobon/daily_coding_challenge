// A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

// if n is even, the next number in the sequence is n / 2
// if n is odd, the next number in the sequence is 3n + 1
// It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

// Bonus: What input n <= 1000000 gives the longest sequence?

// So, if the first number is 20, the next number is 20 / 2 = 10
// If the number is 21, the next number is 3 * 21 + 1 = 63 + 1 = 64

// It looks like every time there's an odd number, it becomes an even number - all even numbers if halved will reach the number 1 in the end

// It's probably not worth testing higher values, more lower values - so if we started with 1, do we run it through the sequence, or is that just solved?

const collatz = start => {
  let s = start;
  const sequence = [s];

  while (s > 1) {
    if (s % 2 === 0) {
      s /= 2;
    } else {
      s *= 3;
      s += 1;
    }

    sequence.push(s);
  }

  return sequence;
};

console.log(collatz(20));
console.log(collatz(21));
console.log(collatz(1));
console.log(collatz(2));
console.log(collatz(999999).length);
console.log(collatz(999997).length);