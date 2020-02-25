// This problem was asked by Two Sigma.

// Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive).

// Get a Math.random() so we have a number between 0 and 1
// Floor it and multiply by 1000

function rand(min, max) {
  const r = Math.round((Math.random() * 1) / (1 / max));
  return Math.max(Math.min(max, r), min);
}

function rand7() {
  return rand(1, 7);
}
function rand5() {
  return rand(1, 5);
}

for (let i = 0; i < 10; i++) {
  console.log('rand7', rand7());
}
for (let i = 0; i < 10; i++) {
  console.log('rand5', rand5());
}