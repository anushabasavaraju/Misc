/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
Constraints:
1 <= n <= 45*/

function climbingStairs(n: number) : number {
  if(n === 1) return 1
  let steps: number[] = []
  steps[0] = 1
  steps[1] = 2
  for(let i = 2; i < n; i++)
  {
    steps[i] = steps[i-1] + steps[i-2]
  }
  return steps[n-1]
}

const steps = climbingStairs(8)
console.log('NUmber of Steps: ' +steps)
