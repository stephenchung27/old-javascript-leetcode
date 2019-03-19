/*
You are given two non - empty linked lists representing two non - negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2, carry = 0) {
  let node = null;

  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;

    const sum = val1 + val2 + carry;

    node = new ListNode(sum % 10);
    node.next = addTwoNumbers(next1, next2, sum >= 10 ? 1 : 0);
  } else if (carry > 0) {
    node = new ListNode(1);
    node.next = nul
  }

  return node
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(7);
l2.next = new ListNode(0);
l2.next = new ListNode(8);