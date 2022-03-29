/**
 * Google Code Jam 2019 - Qualification Round
 * Someone just won the Code Jam lottery, and we owe them N jamcoins!
 * However, when we tried to print out an oversized check, we encountered
 * a problem. The value of N, which is an integer, includes at least
 * one digit that is a 4... and the 4 key on the keyboard of our
 * oversized check printer is broken.
 *
 * Fortunately, we have a workaround: we will send our winner
 * two checks for positive integer amounts A and B, such that
 * neither A nor B contains any digit that is a 4, and A + B = N.
 *
 * Please help us find any pair of values A and B that satisfy these conditions.
 */

function find2Checks(n) {
  var a, b;

  var arrA = Array.from(String(n), Number);
  // n is now an array

  // use for loop to change 4s to 2s
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] == 4) {
      arrA[i] = 2;
    }
  }
  // now arrA is a new array w/ 2s where there were 4s

  // for loop to get arrA to be a string, which is named 'g'
  var g = "";
  for (let i = 0; i < arrA.length; i++) {
    // got help here- told to cancatinate and start with g = "" (empty string)
    g = g + arrA[i];
  }
  a = Number(g);
  // a is now a number

  // find b:
  b = n - a;

  return [a, b];
}


function test(...nums) {
    for(let n of nums) {
        console.log(find2Checks(n))
    }
}

test(4, 1234, 3245364, 44444444444444, 1232454)