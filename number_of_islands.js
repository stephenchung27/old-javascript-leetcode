var numIslands = function(grid) {
  const H = grid.length;
  const W = H && grid[0].length;

  let count = 0;

  for (let row = 0; row < H; row++) {
    for (let column = 0; column < W; column++) {
      if (grid[row][column] === '1') {
        count++;

        dfs(row, column);
      }
    }
  }

  return count;
  
  function dfs(row, column) {
    if (row < 0 || column < 0 || row >= H || column >= W) return;
    if (grid[row][column] === '0') return;
  
    grid[row][column] = '0';
  
    dfs(row, column + 1);
    dfs(row, column - 1);
    dfs(row - 1, column);
    dfs(row + 1, column);
  }
};

const check = [['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']];

console.log(numIslands(check));