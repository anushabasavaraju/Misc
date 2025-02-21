/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.*/
function canConstruct(ransomNote: string, magazine: string): boolean {
    if(ransomNote.length > magazine.length) return false
    let dict: Record<string, number> = {}
    for(let i = 0; i < magazine.length; i++)
    {
        if(dict.hasOwnProperty(magazine[i]))
        {
            dict[magazine[i]]++
        }
        else
        dict[magazine[i]] = 1
    }
    for(let c of ransomNote)
    {
        if(dict.hasOwnProperty(c))
        {
            dict[c] = dict[c] - 1;
            if(dict[c]< 0) return false
        }
        else
        return false
    }
    return true
    
};
