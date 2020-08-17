// push: Adds an element to the linked list
// pop(): Removes an element from the linked list
// get(index): Returns an element from a given index (but doesn’t remove it)
// delete(index): Deletes an item from a given index
// isEmpty(): Returns a boolean indicating whether the list is empty

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.length = 1;
    this.head = head;
    this.tail = head;
  }

  push(node) {
    // This new node is linked to the previous tail.
    this.tail.next = node;

    // The new node is the new tail
    this.tail = node;

    this.length += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    // If the tail is the head, then it's the last item
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    // Find the new tail
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }

    // Cache the current tail
    const t = this.tail;

    // Replace the tail
    current.next = null;
    this.tail = current;

    this.length -= 1;

    return t;
  }

  get(index) {
    if (index < 0 || index > this.length() || this.isEmpty()) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length() - 1) {
      return this.tail;
    }

    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  delete(index) {
    if (this.isEmpty()) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length -= 1;
      return;
    }

    let count = 0;
    let previous;
    let current = this.head;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    // We have previous, current and next
    previous.next = next;

    this.length -= 1;
  }

  isEmpty() {
    return !this.head;
  }
}

const list = new LinkedList(new ListNode('A'));
list.push(new ListNode('B'));
list.push(new ListNode('C'));
list.push(new ListNode('D'));

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));

console.log(list.pop());
console.log(list.delete(0));

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.isEmpty());
