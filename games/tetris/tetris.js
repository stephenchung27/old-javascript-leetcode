const shapes = {
  "T": [[0, 0, 0],
  [1, 1, 1],
  [0, 1, 0]]
}

class Tetris {
  constructor() {
    this.speed = 100;
    this.currentShape = null;
    this.baseArena = Array.from({ length: 20 }, () => new Array(12).fill(0));
  }

  clearArena() {
    this.currentArena = this.baseArena;
  }

  print() {
    setInterval(() => {
      console.clear();

      this.clearArena();
      this.update();

      for (let r = 0; r < this.currentArena.length; r++) {
        console.log(this.currentArena[r].join(""));
      }
    }, this.speed);
  }

  merge(shape) {
    shape.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.currentArena[y + shape.pos.y][x + shape.pos.x] = value;
        }
      });
    });
  }

  update() {
    this.merge(this.currentShape);
  }

  addShape(shape) {
    this.currentShape = shape;
  }
}

class Shape {
  constructor(type) {
    this.matrix = shapes[type];
    this.pos = {x: 0, y: 0};
    setInterval(() => {
      this.pos.y++;
    }, 1000);
  }
}

const tetris = new Tetris();
const T = new Shape("T");

tetris.addShape(T);
tetris.print();