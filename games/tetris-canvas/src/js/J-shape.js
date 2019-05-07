import Shape from './shape';

class JShape extends Shape {
  constructor() {
    super();

    this.rotations = [
      [[-1, 0], [0, 0], [1, 0], [-1, 1]],
      [[0, 1], [0, 0], [0, -1], [-1, -1]],
      [[1, 0], [0, 0], [-1, 0], [1, -1]],
      [[0, -1], [0, 0], [0, 1], [1, 1]],
    ]

    this.offset = this.rotations[0];

    this.positions = this.offset.map((offset) => (
      [this.start[0] + offset[0], this.start[1] + offset[1]]
    ));

    this.getPositions = this.getPositions.bind(this);
  }

  getPositions() {
    this.start[1]++;
    this.offset = this.rotations[this.start[1] % 4];

    this.positions = this.offset.map((offset) => (
      [this.start[0] + offset[0], this.start[1] + offset[1]]
    ));
  }

}

export default JShape;