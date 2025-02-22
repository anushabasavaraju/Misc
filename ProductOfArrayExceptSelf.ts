/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]*/

function productExceptSelf(nums: number[]): number[] {
    let leftProduct = new Array(nums.length)
    let rightProduct = new Array(nums.length)
    let result = []
    leftProduct[0] = 1
    rightProduct[nums.length-1] = 1
    for(let i = 1; i < nums.length; i++)
    {
        leftProduct[i] = leftProduct[i-1] * nums[i-1] 
    }
    for(let j = nums.length-2; j > -1; j--)
    {
        rightProduct[j] = rightProduct[j+1] * nums[j+1]
    }
    for(let k = 0; k < nums.length; k++)
    {
        result[k] = leftProduct[k] * rightProduct[k]
    }
    return result
};
