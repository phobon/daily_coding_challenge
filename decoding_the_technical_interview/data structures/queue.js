// enqueue(): Add an item to the back of the queue
// dequeue() Remove the first item from the queue
// peek(): Return the item at the front of the queue (but do not remove it)
// isEmpty(): Check whether the queue is empty
// get length(): Returns the length of the queue

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[0];
  }

  isEmpty() {
    return this.length() === 0;
  }

  length() {
    return this.queue.length;
  }
}

const q = new Queue();
q.enqueue({ id: 1 });
q.enqueue({ id: 2 });
q.enqueue({ id: 3 });
q.enqueue({ id: 4 });

console.log(q.length());

console.log(q.peek());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty());
