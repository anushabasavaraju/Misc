/*
You are given an m x n grid where each cell can have one of three values:
0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.*/

function orangesRotting(grid: number[][]): number {
    const n = grid.length
    const m =grid[0].length
    let queue = []
    let visited = Array.from({length: n}, () => Array(m).fill(false))

    for(let i = 0; i < n; i ++)
    {
        for(let j = 0; j < m; j++)
        {
            if(grid[i][j] === 2)
            {
                queue.push([i,j])
                visited[i][j] = true
            }
        }
    }

    let count = -1
    const directions = [
        [-1,0],
        [0,-1],
        [1, 0],
        [0,1]
    ]

    while(queue.length > 0)
    {
        const size = queue.length
        count++
        for(let i = 0; i < size; i++)
        {
            const[row, col] = queue.shift()
            for(const [dx,dy] of directions)
            {
                const nx = row + dx
                const ny = dy + col
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === 1 && !visited[nx][ny])
                {
                    visited[nx][ny] = true
                    grid[nx][ny] = 2
                    queue.push([nx, ny])
                }
            }
        }
    }

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < m; j++)
        {
            if(grid[i][j] === 1)
            return -1
        }
    }
    return count === -1 ? 0 : count
};
