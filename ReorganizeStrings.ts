/* Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

 

Example 1:

Input: s = "aab"
Output: "aba"
Example 2:

Input: s = "aaab"
Output: ""
 

Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.
*/

function reorganizeString(s: string): string {
    let dict: Record<string, number> = {}
    let modifiedS = s.split("")
    let result: string[] = []

    //Create a dictionary with all the characters and their frequencies
    for(let i = 0; i < modifiedS.length; i++)
    {
        if(dict.hasOwnProperty(modifiedS[i]))
        {
            dict[modifiedS[i]]++

        }
        else
        {
            dict[modifiedS[i]] = 1
        }
    }
    // Sort the dictionary in the descending order of the frequencies
    let frequencies = Object.entries(dict)
    let sortedDict = frequencies.sort((a,b) => b[1] - a[1])

    //If the maximum frequency is greater than half the length of the string, return blank "".
    if(sortedDict[0][1] > (s.length + 1)/2)
    return ""
    //Else, fill the resulting string with the maximum frequency first in the alternate positions and fill the rest of the strings alternatively.
    let position = 0;
    for(let i = 0; i < sortedDict.length; i++)
    {
        let char = sortedDict[i][0]
        let freq = sortedDict[i][1]
        for(let j = 0; j < freq; j++)
        {
            if(position >= s.length)
            position = 1;
            result[position] = char;
            position = position + 2;
        }
    }
   return result.join('')    
};
