/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// We are given a variable hand = an array.
// Is that hand a number?
// Assign 10 to the face cards.

function handValue(hand) {
  let handTotal = 0;
  hand.forEach(function(hand) {
    if (isNaN(hand) === false) {
      handTotal += Number(hand); // Number() is needed because without it
      // handTotal += hand; // the numbers are catinated, not summed.
    } else if (hand === 'J' | hand === 'Q' | hand === 'K') {
      handTotal += 10;
    } else {
      handTotal += 11;
    }
    console.log(hand);
  })

  hand.forEach(function(hand) {
    if (hand === 'A') {
      if (handTotal > 21) {
        handTotal -= 10;
      }
    }
  });
  console.log(handTotal);
  return handTotal;
};

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
