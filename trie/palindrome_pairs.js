function palindromePairs(words) {
  const trie = new Trie();
  const indices = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const j = trie.find(word);
    if (j) {
      indices.push(i, trie.find(word));
    } else {
      trie.insert(word, i);
      console.log(trie);
    }
  }

  return indices;
};

function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

class Node {
  constructor(letter) {
    this.letter = letter;
    this.next = {};
    this.isWord = false;
    this.wordIndex = null;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  find(word) {
    let currentNode = this.root;

    for (let i = word.length - 1; i >= 0; i--) {
      const letter = word[i];

      if (currentNode.next[letter]) {
        currentNode = currentNode.next[letter];
      } else if (currentNode.isWord && isPalindrome(word.slice(0, i))) {
        return currentNode.wordIndex;
      } else {
        return false;
      }
    }
  }

  insert(word, wordIndex) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      if (!currentNode.next[letter]) {
        currentNode.next[letter] = new Node(letter);
      }
      currentNode = currentNode.next[letter];
    }

    currentNode.isWord = true;
    currentNode.wordIndex = wordIndex;
  }
}

console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]));