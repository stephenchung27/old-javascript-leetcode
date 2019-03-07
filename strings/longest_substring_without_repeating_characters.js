/*
Given a string, find the length of the longest substring without repeating characters.
*/

var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  const dups = new Set();

  let left = 0;
  let right = 0;

  let maxLength = 0;

  while (right < s.length) {
    while (dups.has(s[right])) {
      dups.delete(s[left])
      left++;
    }

    if (maxLength < right - left + 1) maxLength = right - left + 1;

    dups.add(s[right]);

    right++;
  }

  return maxLength;
};