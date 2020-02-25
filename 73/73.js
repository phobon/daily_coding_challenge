// This problem was asked by Google.

// Given the head of a singly linked list, reverse it in-place.

// So a singly linked list is a pretty basic:
// 0---1---2---3---4---n
// If we reverse it, we get:
// n---4---3---2---1---0

// Brute force way could be something like:
// 0---1---2
// Iterate over the list to get x
// Swap x and x.child (y)
// So you have y---y.child
// 1---0---2

// Find out how many items there are in the list
// Swap each item with its corresponding reverse item ie:
// start <--> end
// start+1 <--> end-1
// start+2 <--> end-2

// Start at the end of the list
// Iterate backwards over the list
// Swap the items until i => list length - 2

class LinkedList {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  reverse() {
    const l = this.items.length;
    let index = 0;
    for (let i = l - 1; i > 0; i--) {
      if (index >= i) {
        continue;
      }

      const u = this.items[i];
      const v = this.items[index];

      this.items[index] = u;
      this.items[i] = v;
      
      index++;
    }
    return this;
  }

  toString() {
    return this.items.toString();
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

// Expected output is 5, 10, 20
console.log(list.toString());

const p = list.reverse();
console.log(p.toString());