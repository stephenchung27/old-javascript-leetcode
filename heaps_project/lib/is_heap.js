// you may assume that the array will always have a null element at the 0-th index

function isMaxHeap(array, index = 1) {
  if (array[index] === undefined) return true;

  const leftIndex = 2 * index;
  const rightIndex = 2 * index + 1;
  let leftValue = array[leftIndex] === undefined ? -Infinity : array[leftIndex];
  let rightValue = array[rightIndex] === undefined ? -Infinity : array[rightIndex];

  return array[index] > leftValue && 
    array[index] > rightValue &&
    isMaxHeap(array, leftIndex) &&
    isMaxHeap(array, rightIndex);
}


module.exports = {
  isMaxHeap
};