function mergeSort (array) {
  if (array.length <= 1) return array;

  const middleIndex = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, middleIndex));
  const right = mergeSort(array.slice(middleIndex));

  return merge(left, right);
}

function merge (left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      merged.push(right.shift());
    } else {
      merged.push(left.shift());
    }
  }

  return merged.concat(left).concat(right);
}

const array = [5, 4, 3, 2, 1];

console.log(mergeSort(array));