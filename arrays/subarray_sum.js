const subarraySum = (array, target) => {
  let count = 0;
  let sum = 0;

  const preSumFreq = {};

  for (let number of array) {
    sum += number;
    count += preSumFreq[sum - target] || 0;
    preSumFreq[sum] = (preSumFreq[sum] || 0) + 1;
  }

  return count;
}