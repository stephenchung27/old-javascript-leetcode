var threeSum = function (nums) {
  const solutions = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const result = nums[i] + nums[left] + nums[right];

      if (result < 0) {
        left++;
      } else if (result > 0) {
        right--;
      } else {
        solutions.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      }
    }
  }

  return solutions;
};

const example = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
console.log(threeSum(example))