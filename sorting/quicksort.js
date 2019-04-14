function quicksort (array) {
  if (array.length === 0) return [];

  const middle = array[0];

  const left = array.slice(1).filter(number => number < middle);
  const right = array.slice(1).filter(number => number >= middle);
  const leftSorted = quicksort(left);
  const rightSorted = quicksort(right);

  return leftSorted.concat(middle).concat(rightSorted);
}

const array = [5, 3, 2, 4, 1];

console.log(quicksort(array));