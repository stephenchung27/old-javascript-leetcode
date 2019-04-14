const test = require('../test');

/*
  Write a program that takes a double x and an integer y and returns x. 
  You can ignore overflow and underflow.
*/

function bitwise_powers(x, y) {
  let result = 1.0, power = y;
  
  if(y < 0) {
    power = -power;
    x = 1.0 / x;
  }

  while(power > 0) {
    if(power & 1) {
      result *= x;
    }

    x = x * x;
    power = power >> 1;
  }

  return result;
}

test(bitwise_powers, 8, 2, 3);
test(bitwise_powers, 64, 4, 3);
test(bitwise_powers, 9, 3, 2);