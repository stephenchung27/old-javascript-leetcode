function quickSelect(points, K, low, high) {
  if (low >= high) {
    return
  }

  const partPoint = partition(points, low, high)

  if (partPoint === K - 1) {
    return
  }
  if (partPoint < K - 1) {
    quickSelect(points, K, partPoint + 1, high)
  } else {
    quickSelect(points, K, low, partPoint - 1)
  }
}

function partition(points, low, high) {
  const pivot = points[high]
  let i = low
  let j = low
  while (i < high) {
    if (points[i] < pivot) {
      swap(points, i, j)
      j++
    }
    i++
  }
  swap(points, high, j)
  return j
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const array = [5, 6, 2, 3, 1, 4];

const K = 5;

quickSelect(array, K, 0, array.length - 1);
console.log(array.slice(0, K));