// This problem was asked by Google.

// Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.

//     a
//    / \
//   b   c
//  /
// d

// A node in a binary tree has a couple of things:
// A parent, and two children
// Children: left, right

// We can get there by traversing through each node recursively
// If a node doesn't have children then it's a leaf, so consider this as the deepest
// We can store the current deepest node, then when we get to a leaf, compare depth
// Return the deepest node

class Node {
  constructor(content, left = null, right = null) {
    this.content = content;
    this.left = left;
    this.right = right;
  }
}

const tree = new Node(
  'a',
  new Node(
    'b',
    new Node('d', null, null),
    null,
  ),
  new Node('c', null,
    new Node('e', new Node('f', null), null)),
);

function deepestNode(root) {
  let deepest = { node: null, depth: 0 };

  function traverse(node, depth) {
    const { left, right } = node;
    if (!left && !right) {
      // Check against current deepest here.
      if (deepest.depth > depth) {
        return;
      } else {
        deepest = { node, depth };
      }
    }

    // Increase depth.
    depth++;

    if (left) {
      traverse(left, depth);
    }
    if (right) {
      traverse(right, depth);
    }
  }

  traverse(root, 0);

  return deepest.node;
}
console.log(deepestNode(tree));