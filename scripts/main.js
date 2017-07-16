/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


// ========================
// start of building deck
// ========================



// declare variables

let J = 10;
let Q = 10;
let K = 10;
// let J="J";
// let Q="Q";
// let K="K";
let A = 11;
let deck = [];
let faceCards = [J, Q, K, A];
let fullDeck = []

console.log(J);
console.log(Q);
console.log(K);
console.log(A);
// console.log(deck);
// console.log(faceCards);

// build our deck

for (var i = 2; i < 11; i++) {
  deck.push(i);
}

deck.push(faceCards[0], faceCards[1], faceCards[2], faceCards[3]);

console.log(deck);

// for (var i = 0; i < deck.length; i++) {
//   for (var k = 0; k < 3; k++) {
//     k * fullDeck.push(deck[i]);
//   }
// }

for (var i = 0; i < deck.length; i++) {
  fullDeck.push(deck[i]);
  fullDeck.push(deck[i]);
  fullDeck.push(deck[i]);
  fullDeck.push(deck[i]);
}

// console.log(fullDeck);
console.log(fullDeck.length);

// ========================
// end of building deck
// ========================



// ============================================
// setting the paramaters of the hand based on the rules of the game
// ============================================

// This example returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


// ====================================
// declare variables

let firstCard = getRandomArbitrary(0, 53);
let secondCard = getRandomArbitrary(0, 53);
let thirdCard = getRandomArbitrary(0, 53);
let handPts;
let maxPts = 21;

console.log(firstCard);
console.log(secondCard);
console.log(thirdCard);

let firstCardPts = fullDeck[firstCard];
let secondCardPts = fullDeck[secondCard];
let thirdCardPts = fullDeck[thirdCard];

console.log(firstCardPts);
console.log(secondCardPts);
console.log(thirdCardPts);
// ====================================




// ====================================
// calculate value of A
// ====================================

handPts = firstCardPts;
console.log(handPts);

if (handPts < (maxPts - 11)) {
  A = 1;
}
console.log(A);


handPts = firstCardPts + secondCardPts;
console.log(handPts);

if (handPts < (maxPts - 11)) {
  A = 1;
}
console.log(A);


handPts = firstCardPts + secondCardPts + thirdCardPts;
console.log(handPts);

console.log(handPts);
console.log(maxPts);
console.log(A);

if (handPts < (maxPts - 11)) {
  A = 1;
}
console.log(A);
// ====================================
// calculate value of A
// ====================================







// let hour = 20;
// if (hour < 18) {
//     greeting = "Good day";
// } greeting = "Bad day"
// console.log(greeting);
// ============================================
// setting the paramaters of the hand based on the rules of the game
// ============================================







// fullDeck.push(deck);
// console.log(fullDeck.length);

// for(var i=0; i<deck.length; i++) {
//     deck.push(deck[i]);
// }

// console.log(deck.length);

function handValue(hand) {


  return;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
