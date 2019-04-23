var islandPerimeter = function (grid) {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        return dfs(r, c);
      }
    }
  }

  return 0;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return 1;
    if (grid[r][c] === 0) return 1;

    grid[r][c] = 0;

    const up = dfs(r + 1, c);
    const down = dfs(r - 1, c);
    const left = dfs(r, c + 1);
    const right = dfs(r, c - 1);

    let perimeter = 0;

    if (up > 0) perimeter += up;
    if (down > 0) perimeter += down;
    if (left > 0) perimeter += left;
    if (right > 0) perimeter += right;

    return perimeter;
  }
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));