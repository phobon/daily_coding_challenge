// Given a complete binary tree, count the number of nodes in faster than O(n) time. Recall that a complete binary tree has every level filled except the last, and the nodes in the last level are filled starting from the left.

// So, if we have a complete binary tree, we can basically figure out how many levels there are
// This will give us the last node which we can use to traverse later
// If we have 5 levels, we can assume that we have at the most 5 + 4 + 3 + 2 + 1 (15) nodes
// We can also assume the minimum number of nodes we have is 10 (if there are no nodes in the last row)

// From here, traverse from the top node all the way to the right - if we get the same number of nodes, we can assume that the entire tree is filled, and use that number 15
// If we get levels - 1, that means that the last row is not filled, so we can count from the left to determine the number of nodes
// Start at bottom left, then traverse to parent, then to parent.right them to parent, etc. until we get no right node, where we can stop the count

function BinaryNode(parent, label, left = null, right = null) {
  this.parent = parent;
  this.left = left;
  this.right = right;
  this.label = label;
};

let count = 0;
const fillTree = (root, levels) => {
  if (levels <= 0) {
    return root;
  }

  levels -= 1;

  count += 1;
  root.left = new BinaryNode(root, count);
  fillTree(root.left, levels);

  count += 1;
  root.right = new BinaryNode(root, count);
  fillTree(root.right, levels);

  return root;
};

const tree = fillTree(new BinaryNode(null, count), 2);

// console.log(tree);

const countTree = (root) => {
  let count = 1;
  if (!root.left) {
    // We've reached the end, so return
    return count;
  }

  count += countTree(root.left)

  if (root.right) {
    count += countTree(root.right);
  }

  return count;
};

console.log(countTree(tree));