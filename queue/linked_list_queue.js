class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class Queue {
  constructor() {
    this.sentinel = new Node();
  }

  enqueue(val) {
    if(this.sentinel.next) {
      const node = new Node(val);

      this.sentinel.next.previous = node;
      node.next = this.sentinel.next;
      node.previous = this.sentinel;
      this.sentinel.next = node; 
    } else {
      this.sentinel.next = new Node(val);
      this.sentinel.previous = this.sentinel.next;
      this.sentinel.next.next = this.sentinel;
      this.sentinel.next.previous = this.sentinel;
    }
  }

  dequeue() {
    const node = this.sentinel.previous;

    this.sentinel.previous = this.sentinel.previous.previous;
    node.previous.next = this.sentinel;

    return node.val;
  }
}

module.exports = Queue;