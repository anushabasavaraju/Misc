/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"*/
function reverseVowels(s: string): string {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    let temp = s.split('')
    const dict = [];
    for(let i = 0; i < temp.length; i++)
    {
        if(vowels.includes(temp[i]))
        {
            dict.push(temp[i])
            temp[i] = '67'
        }
    }
    for(let i = 0; i < temp.length; i++)
    {
        if(temp[i] === '67')
        {
            temp[i] = dict.pop()
        }
    }
    return temp.join('') 
};
