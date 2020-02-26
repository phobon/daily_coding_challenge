// We have two identical DOM trees, A and B. For DOM tree A, we have the location of an element. Create a function to find that same element in tree B

// Given an element that exists in tree A, and tree B
// We can iterate back through the parents of the element until we reach the root
// Does each element have an ID? Or just a location in children?
// If each element has an ID, then we can just store those IDs in a stack
// If each element has a position in an array, then we can store that position in a stack

// This should give us a stack which represents the path of an element!
// We can then use this to walk back down tree B and find our identical element

class Node {
  constructor(parent, children) {
    // Parent is a Node
    this.parent = parent;

    // Children is an array of Nodes
    this.children = children;
  }
}

function find(node, root) {
  // Define where we're going to store the path, this can just be an array
  const path = [];

  // Loop over the parents until we get to the root
  let child = node;
  while (child.parent) {
    // Find the index of the child in the parent's children collection
    path.push(child.parent.children.indexOf(child));

    // Now set the child to its parent so we can iterate
    child = child.parent;
  }

  // We should now have a path, which we can pop items off to get the path.
  let newNode;

  while (path.length > 0) {
    newNode = root.children[path.pop()];
  }

  return newNode;
}