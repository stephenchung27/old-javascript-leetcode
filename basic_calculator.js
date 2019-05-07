function isNumber(s) {
  return s !== " " && s !== "" && !isNaN(s);
}

var calculate = function (s) {
  const numbers = [];
  const operations = [];
  let depth = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (isNumber(char)) {
      if (isNumber(s[i - 1])) {
        numbers[numbers.length - 1] = numbers[numbers.length - 1] * 10 + parseInt(char);
        continue;
      }

      if (isNumber(s[i + 1])) {
        numbers.push(parseInt(char));
        continue;
      }

      if (numbers.length > depth) {
        const num1 = numbers.pop();
        const num2 = parseInt(char);

        if (operations.pop() === "+") {
          numbers.push(num1 + num2);
        } else {
          numbers.push(num1 - num2);
        }
      } else {
        numbers.push(parseInt(char));
      }
    } else {
      if (char === "(") {
        depth++;
        continue;
      }
      if (char === ")") {
        depth--;
        continue;
      }

      if (char === "+") {
        operations.push("+");
      } else if (char === "-") {
        operations.push("-");
      }
    }


    console.log("nums " + numbers);
    console.log("ops " + operations);
  }

  console.log("nums " + numbers);
  console.log("ops " + operations);

  while (operations.length > 0) {
    const num2 = numbers.pop();
    const num1 = numbers.pop();

    if (operations.pop() === "+") {
      numbers.push(num1 + num2);
    } else {
      numbers.push(num1 - num2);
    }
  }

  return numbers[0];
};

console.log(calculate("1-11"));
console.log(calculate("2-(5-6)"));
console.log(calculate("(7)-(0)+(4)"));