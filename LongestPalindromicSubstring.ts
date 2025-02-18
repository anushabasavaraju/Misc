/*
Given a string s, return the longest palindromic substring in s.
Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:
Input: s = "cbbd"
Output: "bb"
*/

function longestPalindrome(s: string): string {
    let result = s[0]; // Initialize with the first character to handle edge cases

    if (s.length <= 1) return s;

    for (let i = 0; i < s.length; i++) {
        // Handle odd-length palindrome
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > result.length) {
                result = s.substring(left, right + 1);
            }
            left--;
            right++;
        }

        // Handle even-length palindrome
        let low = i, high = i + 1;
        while (low >= 0 && high < s.length && s[low] === s[high]) {
            if (high - low + 1 > result.length) {
                result = s.substring(low, high + 1);
            }
            low--;
            high++;
        }
    }

    return result;
}
