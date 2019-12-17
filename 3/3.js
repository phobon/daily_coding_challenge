// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// ```
// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// ```

// The following test should pass:

// ```
// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'
// ```

// Recursively serialize items

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  toJSON() {
    return {
      value: this.value,
      left: this.left && this.left.toJSON(),
      right: this.right && this.right.toJSON(),
    };
  }

  static fromJSON({ value, left, right }) {
    return new Node(value, left && this.fromJSON(left), right && this.fromJSON(right));
  }
}

serialize = (node) => {
  return JSON.stringify(node.toJSON());
};
deserialize = (node) => {
  const s = JSON.parse(node);
  return Node.fromJSON(s);
};

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

console.log(node);
console.log(serialize(node));
console.log(deserialize(serialize(node)));
console.log(deserialize(serialize(node)).left.left.value == 'left.left');