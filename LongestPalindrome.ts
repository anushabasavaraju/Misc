/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome.
Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.*/

/*
Algorithm: 
1. Create a dictionary with frequencies
2. Loop through the frequencies in dictionary
3. If the frequency is even number, add the frequency to the result.
4. If the freqquency is odd number, add one less than the frequency to the result. And set the isOdd flag to true.
5. If isOdd flag is true, return result + 1 or else return result.*/

function longestPalindrome(s: string): number {
    let dict: Record<string, number> = {}
    let res: number = 0
    let hasOddFrequency : boolean = false
    for(let i = 0; i < s.length; i++)
    {
        if(dict.hasOwnProperty(s[i]))
        dict[s[i]]++
        else
        dict[s[i]] = 1
    }
    for(let c of Object.values(dict))
    {
        if(c% 2 === 0)
        {
            res = res + c
        }
        else
        {
            res = res + c-1
            hasOddFrequency = true
        }
    }
    return hasOddFrequency ? res+1 : res
};
