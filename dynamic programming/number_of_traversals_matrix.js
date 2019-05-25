function numberOfWays(N, M) {
  const dp = new Array(N).fill()
    .map(() => new Array(M).fill(0));

  
  recurse(N - 1, M - 1);

  console.log(dp);
  
  function recurse(x, y) {
    if (x === y && x === 0 && y === 0) return 1;

    if (dp[x][y] === 0) {
      const waysTop = x === 0 ? 0 : recurse(x - 1, y);
      const waysLeft = y === 0 ? 0 : recurse(x, y - 1);

      dp[x][y] = waysTop + waysLeft;
    }

    return dp[x][y];
  }
}

console.log(numberOfWays(5, 5));