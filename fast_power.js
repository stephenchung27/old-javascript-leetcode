const fastPower = (number, power) => {
  const powers = {};

  const _fastPower = (number, power) => {
    if (power === 1) return number;
    if (power === 2) return number * number;

    // Memoization
    if (powers[power]) return powers[power];
    
    // Odd number
    if (power % 2 === 1) return _fastPower(number, Math.floor(power / 2)) * _fastPower(number, Math.floor(power / 2)) * number; 
  
    return _fastPower(number, Math.floor(power / 2)) * _fastPower(number, Math.floor(power / 2));
  }

  return _fastPower(number, power);
}

console.log(fastPower(2, 2));
console.log(fastPower(2, 4));
console.log(fastPower(3, 5)); 