// This problem was asked by Twitter.

// You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
// You should be as efficient with time and space as possible.

// Create a javascript class (why not?) for this with the members required

class CommerceDataStack {
  constructor() {
    this._orders = [];
  }

  record(order_id) {
    this._orders.push(order_id);
  }

  get_last(i) {
    const index = (this._orders.length - 1) - i;
    return this._orders[index];
  }
}

class CommerceDataDictionary {
  constructor() {
    this._orders = {};
    this._orderCount = 0;
  }

  record(order_id) {
    this._orders[this._orderCount] = order_id;
    this,this._orderCount++;
  }

  get_last(i) {
    const index = (this._orderCount - 1) - i;
    return this._orders[index];
  }
}

const stack = new CommerceDataStack();
const dictionary = new CommerceDataStack();

function seed() {
  // Seed with random data.
  for (let i = 0; i < 10; i++) {
    const order = `order_id-${Math.random() * 100}`;
    stack.record(order);
    dictionary.record(order);
  }
}

seed();

console.log(stack, dictionary);

console.log(stack.get_last(0));
console.log(dictionary.get_last(0));