/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

function reverse(x: number) : number {
  let ans = 0;
  const isNegative = x < 0 ? true : false; //Check if the number is negative.
  if(isNegative)
  {
    x = x * -1; //Make the number Positive.
  }
  while(x > 0)
  {
    let last = x % 10;
    ans = ans * 10 + last;
    x = Math.floor(x / 10);
    if(ans < -(2**31) || ans > (2**31)) //Check if the answer is going out of bounds of an integer. We check it with 2 power 31.
    return 0;
  }
  if(isNegative)
  return ans * -1;
  else
  return ans;
}

const reverseInteger = reverse(678)
console.log('Reverse Integer: ' +reverseInteger);
const reverseInteger2 = reverse(-12678)
console.log('Reverse Integer: ' +reverseInteger2);
