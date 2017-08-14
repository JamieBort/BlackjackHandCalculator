/*
   Implement a Blackjack hand value calculator.
   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.
   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

let hand1 = ["8", "J", "A"];
let hand2 = ["8", "A", "J"];
let hand3 =["8", "7", "A", "A"];
let hand4 =["K", "A"];

function handValue (hand) {

  let number = 0;

  for (let i = 0; i < hand.length; i++){
    if (hand[i] === "2" || hand[i] === "3" || hand[i] === "4" || hand[i] === "5" || hand[i] === "6" || hand[i] === "7" || hand[i] === "8" || hand[i] === "9"){
      number += parseInt(hand[i]);
    } else if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K"){
      number += 10;
    }
  };

  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === "A" && number < 11) {
        number += 11;
    } else if (hand[i] === "A" && number > 11) {
        number += 1;
    }
  }
    return number;
  };

console.log(handValue(hand4));

// Need function to return total value of hand


/* -----  Hints ------
1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11
*/
