// This problem was asked by Google.

// Invert a binary tree.

// For example, given the following tree:

//     a
//    / \
//   b   c
//  / \  /
// d   e f
// should become:

//   a
//  / \
//  c  b
//  \  / \
//   f e  d

// Basically taking everything under the root of a tree and flipping it
// So theoretically, we can traverse the tree recursively and flip the nodes

class Node {
  constructor(content, left = null, right = null) {
    this.content = content;
    this.left = left;
    this.right = right;
  }
}

function invert(node) {
  const { left, right } = node;

  // Nodes can be null, that's perfectly valid.
  node.left = right;
  node.right = left;

  // Recursively traverse the tree.
  if (node.left) {
    invert(node.left);
  }
  if (node.right) {
    invert(node.right);
  }

  return node;
}

const tree = new Node(
  'a',
  new Node(
    'b',
    new Node(
      'd'
    ),
    new Node(
      'e'
    ),
  ),
  new Node(
    'c',
    new Node(
      'f'
    )
  )
);

console.log(invert(tree));