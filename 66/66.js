// This problem was asked by Square.

// Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

// Write a function to simulate an unbiased coin toss.

// This gives us a not 50-50 probability
function toss_biased() {
  if (Math.random() > 0.6) {
    return 0;
  } else {
    return 1;
  }
}

function determineProbability() {
  const precision = 99999;
  let zeroes = 0;
  let ones = 0;
  for (let i = 0; i < precision; i++) {
    if (toss_biased() === 0) {
      zeroes++;
    } else {
      ones++;
    }
  }

  zeroes = parseFloat((zeroes / precision).toPrecision(2));
  ones = parseFloat((ones / precision).toPrecision(2));

  return {
    zeroes, ones,
  }
}

function toss_unbiased() {
  const { zeroes, ones } = determineProbability();
  
}

console.log(determineProbability());