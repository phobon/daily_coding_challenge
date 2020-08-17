// Tree - each node can have any number of children
// Binary tree - each node can have a maximum of 2 children
// Full Binary Tree - Every node has exactly 0 or 2 children (but never 1)
// Complete Binary Tree - All levels except the last are full with nodes
// Perfect Binary Tree - All levels including the last level are full of nodes

// Binary Search Tree - where all values on the left of a node are less than the right
//         NO              YES
//         10               10
//      12    14          7    12
//    7    9            3  9      14
//  3

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
      return;
    }

    // If there are nodes, we need to figure out where this node sits
    const traverseTree = (node, value) => {
      if (value < node.value) {
        if (node.left) {
          traverseTree(node.left, value);
        } else {
          node.left = new TreeNode(value);
        }
      } else if (value > node.value) {
        if (node.right) {
          traverseTree(node.right, value);
        } else {
          node.right = new TreeNode(value);
        }
      } else {
        throw 'Cannot add duplicates';
      }
    }

    traverseTree(this.root, value);
  }

  removeChild(value) {
    let current = this.root;
    let found = false;
    let remove;
    let parent = null;

    while (!found) {
      if (current == null || current.value == null) {
        return 'The node was not found';
      }

      // If we find the node we need
      if (value === current.value) {
        remove = current;
        found = true;
      } else if (value > current.value) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }

    // We have found the node and we have the parent, so we have 3 cases to account for
    // If it has two children

    // If the remove node is a leaf
    if (remove.left === null && remove.right == null) {
      if (parent.left === remove) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (remove.left !== remove.right) {
      // If the node has one child, we can just replace it on the parent
      const replace = remove.left || remove.right;
      if (parent.left === remove) {
        parent.left = replace;
      } else {
        parent.right = replace;
      }
    } else {
      // 
    }

  }
}

const tree = new BinaryTree();
tree.addChild(10);
tree.addChild(7);
tree.addChild(3);
tree.addChild(9);
tree.addChild(12);
tree.addChild(14);

console.log(tree);