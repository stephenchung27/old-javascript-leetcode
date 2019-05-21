class UnionFind {
  constructor() {
    this.array = [];
  }

  root(value) {
    while (this.array[value] !== value) {
      this.array[value] = this.array[this.array[value]];

      value = this.array[value];
    }

    return value;
  }

  union(a, b) {
    const rootA = root(a);
    const rootB = root(b);

    this.array[rootA] = rootB;
  }

  find(a, b) {
    return root(a) === root(b);
  }
}