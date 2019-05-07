import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  window.ctx = canvas.getContext("2d");
  canvas.height = 600;
  canvas.width = 600;
  
  const game = new Game();

  animate();

  function animate() {
    game.render();

    requestAnimationFrame(animate);
  }
})