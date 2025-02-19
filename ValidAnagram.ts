/* 
Given two strings s and t, return true if t is an 
anagram of s, and false otherwise.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false
Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.*/

function isAnagram(s: string, t: string): boolean {
    let dict1: Record<string, number> = {}
    if(s.length !== t.length) return false
    for(let i = 0; i < s.length; i++)
    {
        if(!dict1.hasOwnProperty(s[i]))
        dict1[s[i]] = 1
        else
        dict1[s[i]]++
    }
    for(let j = 0; j < t.length; j++)
    {
        if(dict1.hasOwnProperty(t[j]))
         dict1[t[j]]-- 
        else
        return false
    }
    return Object.values(dict1).every(count => count === 0);
};
