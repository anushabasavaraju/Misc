/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.
Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.
Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true*/
//Approach 1: Sorting
function containsDuplicate(nums: number[]): boolean {
    nums.sort((a,b) => a-b)
    let i = 1
    while(i > 0 && i < nums.length)
    {
        if(nums[i] === nums[i-1])
        return true
        i++
    }
    return false
};
//Approach 2: Using Set/List
function containsDuplicate(nums: number[]): boolean {
    let dict: Record<number, number> = {}
    for(let i = 0; i < nums.length; i++)
    {
        if(dict.hasOwnProperty(nums[i]))
        return true
        else
        dict[nums[i]] = 1
    }
    return false   
};
