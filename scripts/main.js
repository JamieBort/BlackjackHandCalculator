/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  var handTotal = 0;
  for (i = 0; i < hand.length; i++) {
    if ((hand[i] === "j") || (hand[i] === "q") || (hand[i] === "k")) {
      hand[i] = "10";
    };
    if (hand[i] === "a") {
      hand[i] = "11";
    };
    console.log(handTotal, "first before");
    handTotal += Number(hand[i]);
    console.log(handTotal, "first after");

    if ( (handTotal > 10) && (hand[i] === "11") ) {
      // hand[i] = "1";
      console.log(handTotal, "second before");
      handTotal -= 10;
      console.log(handTotal, "second after");
    };
    // console.log(typeof total);
  };
  // console.log(total);
  return handTotal;
};




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
