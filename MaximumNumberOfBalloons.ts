/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.
Example 1:
Input: text = "nlaebolko"
Output: 1
Example 2:
Input: text = "loonbalxballpoon"
Output: 2
Example 3:
Input: text = "leetcode"
Output: 0*/
function maxNumberOfBalloons(text: string): number {
    let dict: Record<string, number> = {}
    for(let c of text)
    {
        if(dict.hasOwnProperty(c))
        {
            dict[c]++
        }
        else
        {
            dict[c] = 1
        }
    }
    const b = dict['b'] || 0
    const a = dict['a'] || 0
    const l = Math.floor((dict['l'] || 0) / 2)
    const o = Math.floor((dict['o'] || 0) / 2)
    const n = dict['n'] || 0
    return Math.min(b,a,l,o,n)
};
