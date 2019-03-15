const binary_search_first_index = (arr, target, left = 0, right = arr.length - 1, idx = -1) => {
  if (left > right) return idx;

  const mid = left + Math.floor((right - left) / 2);

  if (arr[mid] <  target) {
    return binary_search_first_index(arr, target, mid + 1, right, idx);
  } else {
    if (arr[mid] === target) idx = mid;
    return binary_search_first_index(arr, target, left, mid - 1, idx);
  }
}

console.log(binary_search_first_index([1, 2, 2, 3, 3], 2));
console.log(binary_search_first_index([1, 2, 3, 3], 2)); 
console.log(binary_search_first_index([1, 2, 3, 3], 3)); 
console.log(binary_search_first_index([1, 2, 2, 3], 3)); 