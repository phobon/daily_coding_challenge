// pop(): Removes the top item from the stack
// push(item): Adds an item to the top of the stack
// peek(): Returns the item at the top of the stack (but does not remove it)
// isEmpty(): Returns true if the stack is empty
// get length(): Returns the number of items in the stack

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.length() === 0;
  }

  length() {
    return this.stack.length;
  }
}

const s = new Stack();
s.push({ id: 1 });
s.push({ id: 2 });
s.push({ id: 3 });
s.push({ id: 4 });

console.log(s.length());
console.log(s.pop());
console.log(s.peek());
console.log(s.length());

console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());

console.log(s.isEmpty());

