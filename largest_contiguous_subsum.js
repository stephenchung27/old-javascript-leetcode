const test = require('./test');

/*
You have an array of integers and you want to find the largest contiguous (together in sequence) sub-sum. 
Find the sums of all contiguous sub-arrays and return the max.
*/

const largest_contiguous_subsum = (arr) => {
  let maxSum = arr[0], sum = 0;

  return maxSum;
}

test(largest_contiguous_subsum, 8, [5, 3, -7])
test(largest_contiguous_subsum, 8, [2, 3, -6, 7, -6, 7])
test(largest_contiguous_subsum, -1, [-1])