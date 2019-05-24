class DisjointSets {
  constructor(count) {
    this.array = Array.from(new Array(count), (_, index) => index);
  }

  root(a) {
    while(this.array[a] !== a) {
      this.array[a] = this.array[this.array[a]];
      a = this.array[a];
    }

    return a;
  }

  union(a, b) {
    const rootA = this.root(a);
    const rootB = this.root(b);

    this.array[rootB] = rootA;
  }

  find(a, b) {
    return this.root(a) === this.root(b);
  }

  print() {
    console.log(this.array);
  }
}

const array = [0, 1, 2, 3, 4, 5];
const disjointSet = new DisjointSets(array.length);

disjointSet.union(array[0], array[1]);
disjointSet.print();
disjointSet.union(array[1], array[2]);
disjointSet.print();
disjointSet.union(array[3], array[4]);
disjointSet.print();
disjointSet.union(array[1], array[3]);
disjointSet.print();
console.log(disjointSet.find(array[1], array[4]));
disjointSet.print();
