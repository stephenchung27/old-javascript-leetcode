function getNthFibonacci(n) {
  const duplicates = {};

  function recurse(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    if (duplicates[n] !== undefined) return duplicates[n];

    const nthFibonacci = recurse(n - 1) + recurse(n - 2);
    duplicates[n] = nthFibonacci;

    return nthFibonacci;
  }

  return recurse(n);
}

console.log(getNthFibonacci(50));