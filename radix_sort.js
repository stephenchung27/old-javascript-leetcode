// Helper functions

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

