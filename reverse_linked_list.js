class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverse(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function printLinkedList(head) {
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }
}

const head = new Node(1);
let current = head;

for (let i = 2; i < 5; i++) {
  current.next = new Node(i);
  current = current.next;
}

printLinkedList(head);
printLinkedList(reverse(head));