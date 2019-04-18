// #### Ping Pong Filter ####
// # Imagine that we have a filter that goes through an array and removes every other
// # element.When it reaches the final element it turns around and does the whole
// # process again, this time going from the end to the start.It repeats this
// # behavior until there is only one element left.
// #
// # For example:
// # Given a starting array[1, 2, 3, 4, 5, 6, 7, 8]
// # We start from the beginning and remove every other element(indicated with !)
// #[!1, 2, !3, 4, !5, 6, !7, 8] = [2, 4, 6, 8]
// # Next we start from the end and remove every other element
// #[2, !4, 6, !8] = [2, 6]
// # Now we start from the beginning again and remove every other element
// #[!2, 6] = [6]
// #
// # Write a method that takes an array of elements.It should return the only
// # element that would remain after filtering the array in the manner described
// # above.
// #
// # Examples:
// #
// # ping_pong_filter([1, 2, 3, 4, 5, 6, 7, 8]) # => 6
// #
// # ping_pong_filter([1, 2, 3, 4]) # => 2
// #
// # ping_pong_filter([3, 5, 7, 8, 9, 2]) # => 8

const ping_pong_filter = (array) => {
  let newArray = [...array];

  while (newArray.length > 1) {
    const temp = [];

    for (let index in newArray) {
      if (index % 2 === 1) {
        temp.push(newArray[index]);
      }
    }

    newArray = temp.reverse();
  }

  return newArray[0];
}

console.log(ping_pong_filter([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(ping_pong_filter([1, 2, 3, 4]));
console.log(ping_pong_filter([3, 5, 7, 8, 9, 2]));