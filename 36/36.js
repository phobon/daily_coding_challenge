// This problem was asked by Dropbox.

// Given the root to a binary search tree, find the second largest node in the tree.

// So if you have a tree like
//      x
//     /  \
//    y    z
//   /  \  /  \
//  a   b  c   d
// /      /    /\
// e     f    g h
//               \
//               i

// The largest node here is x
// The second largest node is z
// So, the second largest node will always be the first child of the root
// If a binary search tree only has one child, then that is the result
// If it has 2 children, recursively traverse these nodes and count the children
// If the second child has more than the first, then it is the 2nd largest, otherwise the first

function search(node) {
  const { left, right } = node;
  let count = 0;

  if (left) {
    count++;
    count += search(left);
  }

  if (right) {
    count++;
    count += search(right);
  }

  return count;
}

function countTree(tree) {
  // Take the root node of the tree.
  const { left, right } = tree;

  if (!left && !right) {
    return null;
  }

  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }

  const l = search(left);
  const r = search(right);

  if (l > r) {
    return left;
  }

  return right;
}

class Node {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

const tree = new Node('a',
  new Node('b',
    new Node('d'), 
    new Node('e',
      new Node('h'),
      new Node('i',
        new Node('l')
      )
    )
  ),
  new Node('c',
    new Node('f'), 
    new Node('g',
      new Node('j'),
      new Node('k',
        new Node('m'),
        new Node('n')
      )
    )
  ),
);

console.log(countTree(tree));