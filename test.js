const test = (fn, answer, ...testCases) => {
  if (fn(...testCases) === answer) {
    console.log("\x1b[32m%s\x1b[0m", `${fn(...testCases)}\t${answer}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `${fn(...testCases)}\t${answer}`);
  }
}

module.exports = test;