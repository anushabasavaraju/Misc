/* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?*/
/* Algorithm: 
1. Take two pointers left and right both at the end of each arrays where the values end.
2. Take a third pointer i at the end of last array size to insert the largest element of the 2 sorted arrays.
3. While left is greater than 0 (that means it should not go out of bounds) repeat step 4 - step 6
4. compare the last elements of the both arrays i.e., left and right
5. if left is greater than right, insert the element at left in the ith position and decrement first and i
6. else, insert the element at second position in the ith place and decrement right and i*/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let first = m -1;
    let second = n-1;
    let i = n+m -1;
    while(second >= 0)
    {
        if(nums1[first] > nums2[second])
        {
            nums1[i] = nums1[first];
            i--;
            first--;
        }
        else
        {
            nums1[i] = nums2[second];
            i--;
            second--;
        }
    }      
};
