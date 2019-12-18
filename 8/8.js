// This problem was asked by Google.

// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

// A unival tree is one that has all the same values
// If a node is null, it counts as a unival tree (because all values are the same, null, null, null)
// If all values of a node (value, left.value, right.value) are equal, then this is a unival subtree
// All leaf nodes are unival subtrees

//    0
//   / \
//  1   0
// should have 2 subtrees

//    0
//   / \
//  1   0
//     / \
//    1   0
// Should have 3 subtrees

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1
// Should have 5 subtrees

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const oneSubtree = new Node(0, new Node(1), new Node(0));
const threeSubtrees = new Node(
  0,
  new Node(1),
  new Node(0, new Node(1), new Node(0)),
);
const fiveSubtrees = new Node(
  0,
  new Node(1),
  new Node(
    0,
    new Node(1, new Node(1), new Node(1)),
    new Node(0)
  ),
);

const countSubtrees = node => {
  if (!node) {
    // An empty unival tree counts
    return 1;
  }

  const { value, left, right } = node;

  // If left and right are null, then this is a leaf, so it is a unival subtree
  if (!left && !right) {
    return 1;
  }

  let count = 0;

  // Check whether all values are the same, if they are then this is a subtree
  if (left && right) {
    if (value === left.value && value === right.value) {
      count += 1;
    }
  }

  if (left) {
    count += countSubtrees(left);
  }

  if (right) {
    count += countSubtrees(right);
  }

  return count;
};

console.log('two subtree:', countSubtrees(oneSubtree));
console.log('three subtrees:', countSubtrees(threeSubtrees));
console.log('five subtrees:', countSubtrees(fiveSubtrees));