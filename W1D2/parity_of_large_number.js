const test = require('../test');

/*
  How would you compute the parity of a very large number of 64-bit words?
*/

function parity_of_large_numbers(x) {
  x = x ^ (x >> 32);
  x = x ^ (x >> 16);
  x = x ^ (x >> 8);
  x = x ^ (x >> 4);
  x = x ^ (x >> 2);
  x = x ^ (x >> 1);
  return x & 0b1;
}


test(parity_of_large_numbers, 1, 0b1101);
test(parity_of_large_numbers, 0, 0b10001000);