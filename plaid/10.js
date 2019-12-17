// What is the value of `myCandyList`?

var candy = [
  {
    name: 'lollipop',
    price: 1.2,
  },
  {
    name: 'hearts',
    price: 0.5,
  },
  {
    name: 'pears',
    price: 0.9,
  },
  {
    name: 'toffee',
    price: 5.2,
  },
  {
    name: 'fruit cubes',
    price: 3,
  },
];

const myCandyList = candy
  .filter(({ price }) => price >= 1)
  .map(({ name }, i) =>
    i % 2 != 0
      ? name.toUpperCase()
      : name
  )
  .reduceRight((memo, candy) =>
    `${memo}, ${candy}`
  );

// 'FRUIT CUBES, toffee, LOLLIPOP'

// + 'fruit cubes, TOFFEE, lollipop'
// ^^^ Filter out all items with price < 1, set any item modulo 2 to uppercase, then reduce from right to left. This returns a string

// ['FRUIT CUBES', 'toffee', 'LOLLIPOP']

// ['fruit cubes', 'TOFFEE', 'lollipop']