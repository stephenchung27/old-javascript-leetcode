var permuteUnique = function (nums) {
  const results = [];

  nums.sort((a, b) => a - b);

  _permute([], new Set());

  return results;

  function _permute(current, used) {
    if (current.length === nums.length) {
      results.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used.has(i)) continue;

      if (i > 0 && nums[i] === nums[i - 1] && !used.has(i - 1)) continue;

      current.push(nums[i]);
      used.add(i);
      _permute(current, used);
      current.pop();
      used.delete(i);
    }
  }
};

// console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([2, 1, 1]));