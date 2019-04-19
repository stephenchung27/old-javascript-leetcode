class TreeNode {
  constructor(value, red = false) {
    this.value = value;
    this.red = red;
    this.left = null;
    this.right = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = new TreeNode();
  }

  insert(node, value) {
    const nullChild = new TreeNode();
    const newNode = new TreeNode(value, true);

    if (node.value === null) return newNode;
    else if (value > node.value) {
      node.right = insert(node.right.value);

      if (node.red) return node;
      else if (node.right.red) {
        if ()
      }
    }
  }
}