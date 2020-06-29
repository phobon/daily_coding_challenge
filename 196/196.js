// Given the root of a binary tree, find the most frequent subtree sum. The subtree sum of a node is the sum of all values under a node, including the node itself.

// For example, given the following tree:

//   5
//  / \
// 2  -5
// Return 2 as it occurs twice: once as the left leaf, and once as the sum of 2 + 5 - 5.

// So, identifying all of the subtrees (ie: ones that have 1 or 0 child levels) would be a good start here
// If we can identify a subtree, then we can sum up the values
// Store all of the sums of subtrees, then return the most frequent one

// Brute force, this could be done recursively, identify the subtrees as we get to them, then sum them and store the results

class Node {
  constructor(current, left = null, right = null) {
    this.current = current;
    this.left = left;
    this.right = right;
  }

  hasChildren() {
    return this.left !== null || this.right !== null;
  }

  isSubtree() {
    // If there are no children, then this is a subtree.
    if (!this.left && !this.right) {
      return true;
    }

    // If there are children with children, this is not a subtree
    if (this.left && this.left.hasChildren()) {
      return false;
    }
    if (this.right && this.right.hasChildren()) {
      return false;
    }

    return true;
  }

  sumSubtree() {
    if (!this.isSubtree()) {
      return -1;
    }

    let sum = this.current;
    if (this.left) {
      sum += this.left.current;
    }
    if (this.right) {
      sum += this.right.current;
    }

    return sum;
  }
}

const Tree = new Node(5, new Node(2, new Node(5)), new Node(-5, new Node(2)));

// console.log(Tree.hasChildren());
// console.log(Tree.isSubtree());
// console.log(Tree.sumSubtree());

const processSubtree = (values, root) => {
  if (root.isSubtree()) {
    const subtreeSum = root.sumSubtree();
    if (values[subtreeSum]) {
      values[subtreeSum] += 1;
    } else {
      values[subtreeSum] = 1;
    }
  }

  if (root.left) {
    processSubtree(values, root.left);
  }

  if (root.right) {
    processSubtree(values, root.right);
  }
}

const processTree = root => {
  const values = {};

  processSubtree(values, root);

  let mostCommonValue;
  let mostCommonCount;
  for (const k of Object.keys(values)) {
    const v = values[k];
    if (mostCommonValue == null) {
      mostCommonValue = k;
      mostCommonCount = v;
    } else if (v > mostCommonCount) {
      mostCommonValue = k;
      mostCommonCount = v;
    }
  }

  return [values, mostCommonValue];
}

console.log(processTree(Tree));