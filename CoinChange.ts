/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1
Example 3:
Input: coins = [1], amount = 0
Output: 0*/

function coinChange(coins: number[], amount: number): number {
    if(amount === 0) return 0
    let helper = new Array(amount+1).fill(Infinity)
    helper[0] = 0
    for(const coin of coins)
    {
        for(let i = coin; i <= amount; i++)
        {
            helper[i] = Math.min(helper[i], helper[i-coin]+1)
        }
    }
    return helper[amount] === Infinity? -1 : helper[amount]
    
};
