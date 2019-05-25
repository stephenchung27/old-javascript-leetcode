function findMaximumSubarray(array) {
  let maxSeen = 0, maxEnd = 0;

  for (const a of array) {
    maxEnd = Math.max(a, a + maxEnd);
    maxSeen = Math.max(maxSeen, maxEnd);
  }

  return maxSeen;
}

const A = [-2, 3, 1, -7, 3, 2, -1];

console.log(findMaximumSubarray(A));