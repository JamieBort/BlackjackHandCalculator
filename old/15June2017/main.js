/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// rules: https://en.wikipedia.org/wiki/Blackjack

// Decair variables

// Constructing the deck

let Array1 = ["S", "H", "D", "C"]
let Array2 = ["J", "Q", "K", "A"];
for (var i = 2; i < 11; i++) {
  Array2.push(i);
};
// console.log(Array2);
console.log(Array2.length);

// last step to constructing the deck

const deck = [];
for (var i = 0; i < Array1.length; i++) {
  for (var k = 0; k < Array2.length; k++) {
    // let deck = [];
    deck.push(Array1[i] + Array2[k]);
  }
}

// console.log(deck);
// console.log(deck.length);

// assign value of each card

for (var i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}
console.log(deck[0]);
 deck[0] = 10;
console.log(deck[0]);

for (var i = 0; i < 2; i++) {
  deck[i] = 10;
  console.log(deck[i]);
}

// ====================================

// ====================================
// ====================================



// This example returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// generate the hand

  const firstCard = getRandomArbitrary(1,53);
  const secondCard = getRandomArbitrary(1,53);
  const thirdCard = getRandomArbitrary(1,53);
let hand = [deck[firstCard], deck[secondCard], deck[thirdCard]];

console.log(hand);

// determine the value of the hand



// function handValue(hand) {


// return;
// }


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
