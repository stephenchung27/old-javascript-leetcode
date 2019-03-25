const Queue = require('../queue/linked_list_queue');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.balanceFactor = null; // {-1, 0, 1}
  }
}

class MinHeap {
  constructor() {
    this.head = new Node();
    this.array = [];
  }

  breadthFirstSearch(val, node = this.head) {
    const queue = new Queue();
    const visited = new Set();

    queue.enqueue(node);

    while (!queue.empty()) {
      const currentNode = queue.dequeue();

      if (currentNode.val === val) return currentNode;

      if(currentNode.left) queue.enqueue(currentNode.left);
      if(currentNode.right) queue.enqueue(currentNode.right);
    }

    return null;
  }

  depthFirstSearch(val, node = this.head) {
    if (node === null) return null;

    if (node.val === val) return node;

    const leftSearch = depthFirstSearch(val, node.left);
    if (leftSearch) return leftSearch;

    const rightSearch = depthFirstSearch(val, node.right);
    return rightSearch;
  }

  getMin() {
    return this.head.val;
  }

  
}

module.exports = MinHeap;