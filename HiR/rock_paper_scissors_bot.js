// # ### Rock Paper Scissors Bot ###
// #
// # 'Rock Paper Scissors' is a simple game for two people.Each player simultaneously
// # selects either 'rock', 'paper', or 'scissors',
// #
// # The winner is determined according to the following rules:
// # - 'rock' wins over 'scissors'
// # - 'scissors' wins over 'paper'
// # - 'paper' wins over 'rock'
// #
// # Rocky is a robot programmed to play 'Rock Paper Scissors'.He always follows
// # the same strategy every time he plays.He keeps track of what move his opponent
// # has been playing the most and plays the corresponding counter move.If his
// # opponent has not favored any particular move over all other moves then Rocky
// # will play a random move.
// #
// # Write a function that takes a string of moves.It should return a string of
// # moves that Rocky would make in response.Represent a random move with an '?'.
// #
// # rps_bot("rrrr") # => "?ppp"
// # rps_bot("srrr") # => "?r?p"
// # rps_bot("rprs") # => "?p?p"
// # rps_bot("psrpsr") # => "?s??s?"
// # rps_bot("rpsssprrr") # => "?p??rrrr?"

const rps_bot = (moves) => {
  const movesCount = {
    'r': 0,
    'p': 0,
    's': 0
  }

  let botMoves = '';

  for (let index = 0; index < moves.length; index++) {
    if (movesCount['r'] > movesCount['p'] && movesCount['r'] > movesCount['s']) {
      botMoves += 'p';
      continue;
    }

    if (movesCount['p'] > movesCount['r'] && movesCount['p'] > movesCount['s']) {
      botMoves += 's';
      continue;
    }

    if (movesCount['s'] > movesCount['p'] && movesCount['s'] > movesCount['r']) {
      botMoves += 'r';
      continue;
    }

    botMoves += '?';

    movesCount[moves[index]]++;
  }

  return botMoves;
} 

console.log(rps_bot("r"));
console.log(rps_bot("rrrr"));
console.log(rps_bot("srrr"));
console.log(rps_bot("rprs"));
console.log(rps_bot("psrpsr"));
console.log(rps_bot("rpsssprrr"));