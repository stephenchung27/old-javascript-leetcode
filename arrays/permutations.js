function permute(numbers) {
  const results = [];

  function _permute(current, remaining) {
    if (remaining.length === 0) {
      results.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[0]);

      _permute(current, numbers.slice(0, i).concat(numbers.slice(i + 1)));

      current.pop();
    }
  }

  _permute();

  return results;
}