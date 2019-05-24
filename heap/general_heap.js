class Heap {
  constructor(comparator) {
    this.array = [null];
    this.comparator = comparator;
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

    if (this.comparator(this.array[index], this.array[parentIndex])) {
      [this.array[index], this.array[parentIndex]] = [this.array[parentIndex], this.array[index]];

      this.siftUp(parentIndex);
    }
  }

  extract() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();

    const output = this.array[1];

    this.array[1] = this.array.pop();
    this.siftDown(1);

    return output;
  }

  siftDown(index) {
    const leftIndex = this.getLeftChild(index);
    const rightIndex = this.getRightChild(index);

    const leftValue = this.array[leftIndex] !== undefined ? this.array[leftIndex] : Infinity;
    const rightValue = this.array[rightIndex] !== undefined ? this.array[rightIndex] : Infinity;

    if (this.comparator(this.array[index], leftValue) && this.comparator(this.array[index], rightValue)) return;

    let swapIndex;

    if (this.comparator(leftValue, rightValue)) {
      swapIndex = leftIndex;
    } else {
      swapIndex = rightIndex;
    }

    [this.array[index], this.array[swapIndex]] = [this.array[swapIndex], this.array[index]];

    this.siftDown(swapIndex);
  }
}

function minHeapComparator(a, b) {
  return a < b;
}

function maxHeapComparator(a, b) {
  return a > b;
}