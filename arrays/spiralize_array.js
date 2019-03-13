/*
  Write a program which takes an n x n 2D array.
  It returns the spiral ordering of the array.
*/

/* 
  1. Create an arrray that is nxn that is filled with true
  2. Every cell you iterate through you flip it to false
  3. Once you hit an undefined/false (falsey) value switch directions
*/

const spiralize_array = (matrix) => {
  const matrixCheck = new Array(matrix.length).map(() => (
    new Array(matrix.length).fill(true)
  ));

  const spiralized = [];

  let row = 0;
  let col = 0;
  let rowInc = 0;
  let colInc = 1;

  while(spiralized.length < matrix.length * matrix.length) {
    if(matrixCheck[row][col]) {
      spiralized.push(matrix[row][col])
    } else {
      if (rowInc === 0 && colInc === 1) {
        rowInc = 1; colInc = 0;
      } else if (rowInc === 1 && colInc === 0) {
        rowInc = -1; colInc = 0;
      } else if (rowInc === 0 && colInc === -1) {
        rowInc = 0; colInc = -1;
      } else {
        rowInc = 0; colInc = 1;
      }
    }
    
    row += rowInc;
    col += colInc;
  }
  
  return spiralized;
}