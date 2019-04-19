class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

var serialize = function (root) {
  const result = [];
  if (root === null) return [];

  const queue = [root];

  while (queue.length > 0) {
    const currentRoot = queue.shift();
    if (currentRoot !== null) {
      result.push(currentRoot.val);
      queue.push(currentRoot.left);
      queue.push(currentRoot.right);
    } else {
      result.push(null);
    }
  }

  return result;
};

var deserialize = function (data) {
  if (data.length === 0) return null;

  const root = new TreeNode(data[0]);

  const _deserialize = (root, index) => {
    if (root === null) return;

    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    const leftValue = data[leftIndex];
    const rightValue = data[rightIndex];

    if (typeof leftValue === 'number') {
      root.left = new TreeNode(leftValue);
    }

    if (typeof rightValue === 'number') {
      root.right = new TreeNode(rightValue);
    }

    _deserialize(root.left, leftIndex);
    _deserialize(root.right, rightIndex);
  }

  _deserialize(root, 0);

  return root;
};


// console.log(deserialize([1, 2, 3, null, null, 4, 5]))
console.log(deserialize([-1, 0, 1]));