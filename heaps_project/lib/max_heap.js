class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(index) {
    return Math.floor(index / 2);
  }

  getLeftChild(index) {
    return 2 * index;
  }

  getRightChild(index) {
    return 2 * index + 1;
  }

  insert(value) {
    this.array.push(value);

    this.siftUp(this.array.length - 1);
  }

  siftUp(index) {
    if (index === 1) return;

    const parentIndex = this.getParent(index);

    if (this.array[parentIndex] < this.array[index]) {
      [this.array[parentIndex], this.array[index]] = [this.array[index], this.array[parentIndex]];

      this.siftUp(parentIndex);
    }
  }

  deleteMax() {
    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return null;

    const max = this.array[1];
    this.array[1] = this.array.pop();

    this.siftDown(1);

    return max;
  }

  siftDown(index) {
    const leftIndex = this.getLeftChild(index);
    const rightIndex = this.getRightChild(index);
    let leftValue = this.array[leftIndex];
    let rightValue = this.array[rightIndex];

    if (leftValue === undefined) leftValue = -Infinity;
    if (rightValue === undefined) rightValue = -Infinity;

    if (this.array[index] > leftValue && this.array[index] > rightValue) return;

    let swapIndex;

    if (leftValue < rightValue) {
      swapIndex = rightIndex;
    } else {
      swapIndex = leftIndex;
    }

    [this.array[index], this.array[swapIndex]] = [this.array[swapIndex], this.array[index]];

    this.siftDown(swapIndex);
  }
}

module.exports = {
  MaxHeap
};