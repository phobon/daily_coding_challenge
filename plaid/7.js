// What is the value of `blocks[0]`?

const blocks = [
  { text: 'hello ' },
  { text: 'world' },
  { text: '!' },
];

blocks.reduce(
  (mergedBlock, block) => {
    mergedBlock.text += block.text;

    return mergedBlock;
  }
);

// `{ text: '!' }`

// `{ text: 'hello world!' }`
// ^^^ reduce merges array values (or strings) into a single value

// `{ text: 'hello ' }`