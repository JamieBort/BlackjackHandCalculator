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

let J = "J";
let Q = "Q";
let K = "K";
let A = "A";
let deck = [];
let faceCards = [J, Q, K, A];
let fullDeck = []

// check via console.log();
// console.log(J);
// console.log(Q);
// console.log(K);
// console.log(A);
// console.log(deck);
// console.log(faceCards);

// build our deck

for (var i = 2; i < 11; i++) {
  deck.push(i);
}

deck.push(faceCards[0], faceCards[1], faceCards[2], faceCards[3]);

console.log("The " + deck.length + " cards in the deck are " + deck + ".");

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

console.log("The " + fullDeck.length + " cards in the deck are " + fullDeck + ".");
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



// determine the position of the element that is selected randomly from the array fullDeck

let firstElPos = getRandomArbitrary(0, 52);
let secondElPos = getRandomArbitrary(0, 52);
let thirdElPos = getRandomArbitrary(0, 52);
let handPts;
let maxPts = 21;

console.log("The first position of the element that is selected radomly from the full deck of cards is " + firstElPos + ".");
console.log("The second position of the element that is selected radomly from the full deck of cards is " + secondElPos + ".");
console.log("The first position of the element that is selected radomly from the full deck of cards is " + thirdElPos + ".");

// (rename: firstCardPts to firstCardName)
// (rename: secondCardPts to secondCardName)
// (rename: thirdCardPts to thirdCardName)

let firstCardName = fullDeck[firstElPos];
let secondCardName = fullDeck[secondElPos];
let thirdCardName = fullDeck[thirdElPos];

console.log("The first card is " + firstCardName + ".");
console.log("The second card is " + secondCardName + ".");
console.log("The third card is " + thirdCardName + ".");


// the following for statement is not necessary

// for (var i = 0; i < array.length; i++) {
//   array[i]
// }

if (firstCardName === "J" || firstCardName === "Q" || firstCardName === "K") {
  firstCardName = 10;
  J = 10;
  Q = 10;
  K = 10;
} else if (firstCardName === "A") {
  firstCardName = 11
}

console.log(firstCardName);

if (secondCardName === "J" || secondCardName === "Q" || secondCardName === "K") {
  secondCardName = 10;
  J = 10;
  Q = 10;
  K = 10;
} else if (secondCardName === "A") {
  secondCardName = 11
}




console.log(secondCardName);

if (thirdCardName === "J" || thirdCardName === "Q" || thirdCardName === "K") {
  thirdCardName = 10;
  J = 10;
  Q = 10;
  K = 10;

} else if (thirdCardName === "A") {
  thirdCardName = 11
}

console.log(thirdCardName);

// console.log("The value of Jack is " + J + ".");
// console.log("The value of Queen is " + Q + ".");
// console.log("The value of King is " + K + ".");


// ====================================




// ====================================
// calculate value of A
// ====================================



handPts = firstCardName;
console.log("The value of the first card is " + handPts + ".");


handPts = firstCardName + secondCardName;
console.log("The sum of the values of the first two cards is " + handPts + ".");

console.log( "The value of the hand is " + handPts);
console.log(maxPts);
console.log( "The value of the max is " + (maxPts-11));
console.log(K);

if ( 11 < ( maxPts - handPts )) {
  console.log("yo yo");
  A = 1;
  console.log( "first " + A );
} else {
  A = 11;
}

console.log( "second " + A );

// if (handPts > (maxPts - 11)) {
//   console.log("yo");
//   // A = 1;
// }
console.log("The value of the Ace is now " + A + ". fix this    ***********         .");

// console.log("this" + A);

handPts = firstCardName + secondCardName + thirdCardName;

console.log("The sum of the values of the three cards is " + handPts + ".");

if (handPts > 21) {
  console.log("You lose.");
} else if (true) {
  console.log("You win.");
}

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
  // The instructions:
  // Taking this into consideration, were you to build a Blackjack game, you would need a function that can take any hand and return the total value of that hand. This function would be used a lot in your game. It should take an array of cards as an argument and return a single number. The number should be the value of the hand.
let firstCardName = 2;
let secondCardName = 2;
let thirdCardName = 8;


  hand = [firstCardName, secondCardName, thirdCardName];

console.log(firstCardName);
console.log(secondCardName);
console.log(thirdCardName);
console.log(handValue);

  return hand[0] + hand[1] + hand[2];
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
