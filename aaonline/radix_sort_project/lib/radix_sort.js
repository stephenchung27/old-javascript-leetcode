const getDigitFrom = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

const getIntLength = (num) => {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

const getMaxDigits = (nums) => {
  let maxDigits = 0;

  for (let number of nums) {
    maxDigits = Math.max(maxDigits, getIntLength(number));
  }

  return maxDigits;
}

function radixSort(arr) {
  // Edge case of input NOT being an array
  if (!(arr instanceof Array)) return null;

  // Edge case where arr is empty
  // if (arr.length === 0) return [];

  // Edge case where arr only has a single element
  // if (arr.length === 1) return arr;


  for (let i = 0; i < getMaxDigits(arr); i++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let number of arr) {
      const digit = getDigitFrom(number, i);
      buckets[digit].push(number);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

module.exports = {
  radixSort
};