class Node {
  constructor(value, parent = null) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.balance = 0;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let node = this.root;
      let parent = null;

      while (true) {
        if (node.value === value) {
          return false;
        }

        parent = node;

        let goLeft = node.value > value;
        node = goLeft ? node.left : node.right;

        if (node === null) {
          if (goLeft) {
            parent.left = new Node(value, parent);
          } else {
            parent.right = new Node(value, parent);
          }

          this.rebalance(parent);
          break;
        }
      }
    }

    return true;
  }

  rebalance(node) {
    this.setBalance(node);

    if (node.balance === -2) {
      if (this.height(node.left.left) >= this.height(node.left.right)) {
        node = this.rotateRight(node);
      } else {
        node = this.rotateLeftThenRight(node);
      }
    } else if (node.balance === 2) {
      if (this.height(node.right.right) >= this.height(node.right.left)) {
        node = this.rotateLeft(node);
      } else {
        node = this.rotateRightThenLeft(node);
      }
    }

    if (node.parent !== null) {
      this.rebalance(node.parent);
    } else {
      this.root = node;
    }
  }

  rotateLeft(a) {
    let b = a.right;
    b.parent = a.parent;
    a.right = b.left;

    if (a.right !== null) {
      a.right.parent = a;
    }

    b.left = a;
    a.parent = b;

    if (b.parent !== null) {
      if (b.parent.right === a) {
        b.parent.right = b;
      } else {
        b.parent.left = b;
      }
    }

    this.setBalance(a);
    this.setBalance(b);

    return b;
  }

  height(node) {
    if (node === null) {
      return -1;
    } else {
      return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
  }

  setBalance(node) {
    node.balance = this.height(node.right) - this.height(node.left);
  }
}