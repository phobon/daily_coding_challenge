const i1 = function*() {
  yield* [0, 2, 3, 4, 9, 10];
}

const i2 = function*() {
  yield* [1, 2, 9, 10, 14];
}

function shared(iter1, iter2) {
  const dictionary = [];
  const sharedNumbers = [];

  for (const i of iter1()) {
    dictionary.push(i);
  }

  for (const i of iter2()) {
    if (dictionary.indexOf(i) > 0) {
      sharedNumbers.push(i);
    }
  }

  return sharedNumbers;
}

console.log(shared(i1, i2));