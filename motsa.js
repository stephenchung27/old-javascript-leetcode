function medianOfTwoSortedArrays(A, B) {
  const lengthA = A.length;
  const lengthB = B.length;

  if (lengthA > lengthB) return medianOfTwoSortedArrays(B, A);

  let low = 0;
  let high = lengthA;

  while (low <= high) {
    const partitionA = Math.floor((low + high) / 2);
    const partitionB = Math.floor((lengthA + lengthB + 1) / 2) - partitionA;

    const maxLeftA = partitionA === 0 ? -Infinity : A[partitionA - 1];
    const minRightA = partitionA === lengthA ? Infinity: A[partitionA];

    const maxLeftB = partitionB === 0 ? -Infinity: B[partitionB - 1];
    const minRightB = partitionB === lengthB ? Infinity : B[partitionB];

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((lengthA + lengthB) % 2 === 0) {
        return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      high = partitionA - 1;
    } else {
      low = partitionA + 1;
    }
  }
}