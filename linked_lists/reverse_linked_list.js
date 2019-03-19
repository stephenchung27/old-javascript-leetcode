const reverse_linked_list = (node) => {
  let previous = null;
  let current = node;
  let following = node;

  while(current !== null) {
    following = following.next;
    current.next = previous;
    previous = current;
    current = following;
  }

  return previous;
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const printList = (node) => {
  while(node) {
    console.log(node.val);
    node = node.next;
  }
}

printList(reverse_linked_list(node1));