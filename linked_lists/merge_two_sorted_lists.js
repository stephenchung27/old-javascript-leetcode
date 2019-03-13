class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const merge_two_sorted_lists = (l1, l2) => {
  const dummy = new Node();
  let tail = dummy;

  while(l1 !== null && l2 !== null) {
    if(l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  tail.next = l1 || l2;
  
  return dummy.next;
}