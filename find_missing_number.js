const test = require('./test');

/*
  Assume an array of non-negative integers. 
  A second array is formed by shuffling the elements of the first array and deleting a random element. 
  Given these two arrays, find which element is missing in the second array. 

  Do this in linear time with constant memory use.
*/

const find_missing_number = (arr1, arr2) => {
  let sum1 = arr1.reduce((a, b) => a + b);
  let sum2 = arr2.reduce((a, b) => a + b);

  return Math.abs(sum2 - sum1);
}

test(find_missing_number, 8, [8, 3, 5, 1], [1, 5, 3])
test(find_missing_number, 1, [1, 1, 1, 1], [1, 1, 1])
test(find_missing_number, 8, [3, 5, 4, 8, 7, 9], [7, 4, 3, 5, 9])