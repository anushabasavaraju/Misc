/*
Two strings are considered close if you can attain one from the other using the following operations:
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.
Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"*/

function closeStrings(word1: string, word2: string): boolean {
  // 1. Check for equal length of strings
    if(word1.length !== word2.length)
    return false
    let dict1: Record<string, number> = {}
    let dict2: Record<string, number> = {}

    for(let i = 0; i < word1.length; i++)
    {
        if(dict1.hasOwnProperty(word1[i]))
        {
            dict1[word1[i]]++
        }
        else
        {
            dict1[word1[i]] = 1
        }
        if(dict2.hasOwnProperty(word2[i]))
        {
            dict2[word2[i]]++
        }
        else
        {
            dict2[word2[i]] = 1
        }
    }
// 2. Check for same keys/characters in the strings.
    const keys1 = Object.keys(dict1).sort()
    const keys2 = Object.keys(dict2).sort()

    for(let key in keys1)
    {
        if(keys1[key] !== keys2[key])
        return false
    }

  //3. Check for smae frequencies of the characters.

    const values1 = Object.values(dict1).sort((a,b) => a-b)
    const values2 = Object.values(dict2).sort((a,b) => a-b)



    for(let i = 0; i < values1.length; i++)
    {
        if(values1[i] !== values2[i])
        return false
    }
    return true
};
