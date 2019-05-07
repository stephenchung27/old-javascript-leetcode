class Shape {
  constructor() {
    this.start = [3, 0];
    this.positions = [this.start];

    setInterval(() => {
      this.getPositions();
    }, 1000);
  }

  render() {
    for (let position of this.positions) {
      ctx.beginPath();
      ctx.rect(10 + position[0] * 20, 10 + position[1] * 20, 20, 20);
      ctx.lineWidth = "1";
      ctx.fillStyle = "#FF0000";
      ctx.fill();
      ctx.closePath();
    }
  }
}

export default Shape;