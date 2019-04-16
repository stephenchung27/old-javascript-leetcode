// Iterative
const reverseLinkedList = (head) => {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

// Recursive
const reverseLinkedList = (head) => {
  if (head === null) return null;

  if (head.next === null) return head;

  const newHead = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}