/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]*/

function twoSum(nums: number[], target:number) : number[]
{
  let dict: Record<number, number> = {}
  for(let i = 0; i < nums.length; i++)
  {
    let diff = target - nums[i]
    if(dict.hasOwnProperty(diff))
    {
      let ans = dict[diff]
      return [ans, i]
    }
    else
    dict[nums[i]] = i
  }
  return []
}

const sum = twoSum([2,7,11,15], 9)
console.log('Answer: ' +sum)

