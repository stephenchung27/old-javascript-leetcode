function swap(array, indexOne, indexTwo) {
  const temp = array[indexTwo];
  array[indexTwo] = array[indexOne];
  array[indexOne] = temp;
}

function selectionSort(array) {
  for (let swapIndex = 0; swapIndex < array.length; swapIndex++) {
    let minIndex = swapIndex;

    for (let i = swapIndex + 1; i < array.length; i++) {
      if (array[minIndex] > array[i]) {
        minIndex = i;
      }
    }

    swap(array, minIndex, swapIndex);
  }

  return array;
}