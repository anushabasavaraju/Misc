/*Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/
function reverseWords(s: string): string {
    let stack:string[] = []
    let wordStart = -1
    let result = ''
    for(let i = 0; i <= s.length; i++)
    {
        if(i < s.length && s[i] !== ' ')
        {
            if(wordStart === -1) wordStart = i
        }
        else if(wordStart !== -1)
        {
            stack.push(s.substring(wordStart, i))
            wordStart = -1
        }

    }

    return stack.reverse().join(' ')
};
