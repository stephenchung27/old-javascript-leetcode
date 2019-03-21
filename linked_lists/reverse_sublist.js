class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverse_sublist = (list, s, f) => {
  const dummy = new Node();
  dummy.next = list;
  let head = dummy.next;

  for (let i = 1; i < s; i++) {
    head = head.next;
  }

  let curr = head.next;

  for (let i = 1; i <= f - s; i++) {
    const temp = curr.next;

    curr.next = temp.next; // curr.next = curr.next.next
    temp.next = head.next;
    head.next = temp;
  }

  return dummy;
}