class LinkedListNode {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LRUCache {
  constructor(capacity) {
    // Create sentinel head and tail nodes to circumvent null checking
    this.head = new LinkedListNode();
    this.tail = new LinkedListNode();

    // Set next and previous of sentinel nodes
    this.head.next = this.tail;
    this.tail.previous = this.head;

    // Set other class variables
    this.capacity = capacity;
    this.size = 0;
    this.cache = {};
  }

  put(key, value) {
    if (this.cache[key]) {
      // Delete node from Linked List
      const node = this.cache[key];
      node.previous.next = node.next;
      node.next.previous = node.previous;

      // Reset position in Linked List
      node.next = this.head.next;
      this.head.next.previous = node;
      this.head.next = node;
      node.previous = this.head;

      // Set node to new value
      node.value = value;
    } else {
      // Create new node with value
      const newNode = new LinkedListNode(key, value);

      // Add new node to cache
      this.cache[key] = newNode;

      // Add new node to front of Linked List
      newNode.next = this.head.next;
      newNode.previous = this.head;
      this.head.next.previous = newNode;
      this.head.next = newNode;

      // Increment size of LRU Cache
      this.size++;

      // Check if LRU Cache has exceeded capacity
      if (this.size > this.capacity) {
        const tailNode = this.tail.previous;

        // Delete tail node from Linked List
        tailNode.previous.next = this.tail;
        this.tail.previous = tailNode.previous;

        // Delete tail node reference from cache
        delete this.cache[tailNode.key];

        // Update size of LRU Cache
        this.size--;
      }
    }
  }

  get(key) {
    if (!this.cache[key]) {
      // If node does not exist return -1
      return -1;
    } else {
      // Access node to move to head;
      const node = this.cache[key];

      // Delete node from its current position
      node.next.previous = node.previous;
      node.previous.next = node.next;

      // Add node to start of Linked List
      node.previous = this.head;
      node.next = this.head.next;
      this.head.next.previous = node;
      this.head.next = node;

      // Return value
      return node.value;
    }
  }
}