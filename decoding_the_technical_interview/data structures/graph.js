// Directed - graphs that have edges that move in one direction
// Undirected - graphs that have edges that move in both directions

class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }

  removeEdge(value) {
    const i = this.edges.findIndex(e => e.value === value);
    if (i !== -1) {
      this.edges.splice(i, 1);
    }
  }
}

class Graph {
  constructor(undirected = false) {
    this.undirected = undirected;
    this.nodes = [];
  }

  addNode(value) {
    this.nodes.push(new GraphNode(value));
  }

  removeNode(value) {
    // Remove edges in nodes array and find the node itself
    let index;
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      if (node.value === value) {
        index = i;
      }

      node.removeEdge(node);
    }

    this.nodes.splice(index, 1);
  }

  getNode(value) {
    return this.nodes.find(n => n.value === value);
  }

  addEdge(value1, value2) {
    const node1 = this.getNode(value1);
    const node2 = this.getNode(value2);
    node1.edges.push(node2);

    if (this.undirected) {
      node2.edges.push(node1);
    }
  }
}