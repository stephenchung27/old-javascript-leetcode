class LinkedListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor(capacity) {
    this.head = new LinkedListNode();
    this.tail = new LinkedListNode();

    this.head.next = this.tail;
    this.tail.previous = this.head;
  }

  insert(value) {
    const newNode = new LinkedListNode(value);

    this.head.next.previous = newNode;
    newNode.next = this.head.next;

    this.head.next = newNode;

    newNode.previous = this.head;

    return newNode;
  }

  delete() {
    this.tail.previous.previous.next = this.tail;
    this.tail.previous = this.tail.previous.previous;
  }
}

class LRUCache {
  constructor(capacity) {
    this.linkedList = new LinkedList();
    this.map = {};

    this.capacity = capacity;
    this.size = 0;
  }

  put(key, value) {
    this.map[key] = this.linkedList.insert(value);
    this.size++;

    if (this.capacity < this.size) {
      delete this.map[this.linkedList.tail.previous];
      this.linkedList.delete();
    }
  }

  get(key) {
    if (this.map[key]) {
      this.map[key].next.previous = this.map[key].previous;
      this.map[key].previous.next = this.map[key].next;

      this.linkedList.insert(key);

      return this.map[key].value;
    } else {
      return -1;
    }
  }
}