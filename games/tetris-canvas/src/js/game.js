import Grid from './grid';
import LShape from './J-shape';

class Game {
  constructor() {
    this.grid = new Grid();
    this.shape = new LShape();
  }

  render() {
    ctx.clearRect(0, 0, 600, 600);
    this.grid.render();
    this.shape.render();
  }
}

export default Game;