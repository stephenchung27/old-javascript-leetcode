var gameOfLife = function (board) {
  const directions = [[-1, -1], [-1, 0], [-1, 1],
  [0, -1], [0, 1],
  [1, -1], [1, 0], [1, 1]];

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      let neighbors = 0;

      for (let offset of directions) {
        if (r + offset[0] < 0 || c + offset[1] < 0 || r + offset[0] === board.length || c + offset[1] === board[0].length) continue;
        if (board[r + offset[0]][c + offset[1]] === 1 || board[r + offset[0]][c + offset[1]] === 2) neighbors++;
      }

      console.log(neighbors);

      if (board[r][c] === 1 && (neighbors < 2 || neighbors > 3)) board[r][c] = 2;
      if (board[r][c] === 0 && neighbors === 3) board[r][c] = 3;
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      board[r][c] %= 2;
    }
  }

  return board;
};

console.log(gameOfLife([[0, 1, 0], 
                        [0, 0, 1], 
                        [1, 1, 1], 
                        [0, 0, 0]]));