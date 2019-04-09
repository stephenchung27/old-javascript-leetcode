function binarySearch(array, target) {
  if (array.length === 0) return null;

  const middleIndex = Math.floor(array.length / 2);

  if (array[middleIndex] < target) {
    const subAnswer = binarySearch(array.slice(middleIndex + 1), target);
    return subAnswer !== null ? subAnswer + middleIndex + 1 : null;
  } else if (array[middleIndex] > target) {
    return binarySearch(array.slice(0, middleIndex), target);
  } else {
    return middleIndex;
  }
}

const array = [1, 2, 3, 4, 5];
const target = 4;

console.log(binarySearch(array, target));