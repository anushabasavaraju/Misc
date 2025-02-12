/* 
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5
 

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.*/

function calculate(s: string): number {
     const stack: number[] = [];
  let preSign = '+';
  let num = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    const char = s[i];
    if (!isNaN(Number(char)) && char !== ' ') {
      num = num * 10 + Number(char);
    }
    if (isNaN(Number(char)) || i === n - 1) {
      switch (preSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(stack.pop() / num | 0);
      }
      num = 0;
      preSign = char;
    }
  }
  let res = 0;
  for (const num of stack) {
    res += num;
  }
  return res;
    
};
