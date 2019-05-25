function footballScore(finalScore, scores) {
  // let dp = new Array(scores.length)
  // dp = dp.map(() => {
  //   new Array(finalScores).fill(0);
  // });

  const dp = new Array(scores.length).fill().map(() => {
    const row = new Array(finalScore).fill(0);
    row[0] = 1;
    return row;
  });


  for (let i = 0; i < scores.length; i++) {
    for (let j = 1; j < finalScore + 1; j++) {
      const withoutPlay = i >= 1 ? dp[i - 1][j] : 0;
      const withPlay = j >= scores[i] ? dp[i][j - scores[i]] : 0;

      dp[i][j] = withoutPlay + withPlay;
    }
  }

  console.table(dp);
  return dp[dp.length - 1][dp[0].length - 1];
}

const scores = [2, 3, 7];
const finalScore = 12;

console.log(footballScore(finalScore, scores));