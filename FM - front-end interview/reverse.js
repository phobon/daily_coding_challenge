function reverse(input) {
  const length = input.length - 1;
  const inputArray = input.split('');
  for (let i = 0; i < length / 2; i++) {
    const current = inputArray[i];
    const swap = inputArray[length - i];
    inputArray[i] = swap;
    inputArray[length - i] = current;
  }

  return inputArray.join('');
}

console.log(reverse('Hello World!'));

console.log('Hello World!'.split('').reverse().join(''));