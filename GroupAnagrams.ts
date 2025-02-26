/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:
Input: strs = ["a"]
Output: [["a"]]*/

function groupAnagrams(strs: string[]): string[][] {
    let dict: Record<string, string[]> = {}
    for(let s of strs)
    {
        let chars = Array.from(s)
        chars.sort()
        let key = chars.join("")

        if(dict.hasOwnProperty(key))
        {
            dict[key].push(s)
        }
        else
        {
            dict[key] = [s]
        }  
    }
    return Object.values(dict)
};
