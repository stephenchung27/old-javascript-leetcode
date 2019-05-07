class Grid {
  constructor() {
    this.grid = new Array(20).fill(new Array(10).fill(1));
  }

  render() {
    for (let row = 0; row < this.grid.length; row++) {
      for (let cell = 0; cell < this.grid[row].length; cell++) {
        ctx.beginPath();
        ctx.rect(10 + cell * 20, 10 + row * 20, 20, 20);
        ctx.lineWidth = "1";
        ctx.strokeStyle = "#BBB";
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

export default Grid;