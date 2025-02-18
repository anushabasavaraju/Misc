/*
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.
Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].
Example 1:
Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
Example 2:
Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3*/

function numEquivDominoPairs(dominoes: number[][]): number {
    let dict: Record<number, number> = {}
    let count = 0
    for(let [a,b] of dominoes)
    {
        let key = a < b ? a * 10 + b : b * 10 + a
        if(dict[key])
        {
            count = count + dict[key]
            dict[key]++
        }
        else
        dict[key] = 1
    }
    return count   
};
