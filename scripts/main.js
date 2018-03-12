/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

var hand = [];

// This function totals up the hand.
// var j = 10;
// var q = 10;
// var k = 10;

function handValue(hand) {
  total = 0;
  for (i = 0; i < hand.length; i++) {
    // console.log(typeof hand[i]);
    // console.log(hand[i]);

    if ((hand[i] === "j") || (hand[i] === "q") || (hand[i] === "k")) {
      hand[i] = "10";
    };
    if ((hand[i] === "a") && (total < 15) ) {
      hand[i] = "10";
    }else {
      hand[i] = "1";
    };

    total += Number(hand[i]);
    if (total > 22) {
      console.log("game over. you lose. The total is " + total);
      return;
    }
    // console.log(item[i], "the " +i+" item");
    console.log("the current total is " + total);
    // console.log(total, "after " + i + " items");
  }
  console.log("the final total is " + total);
  return total;
};


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
