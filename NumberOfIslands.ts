/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3*/

function numIslands(grid: string[][]): number {
    if(grid === null || grid.length === 0 || grid[0].length === 0) return 0
    let count = 0
    for(let i = 0; i < grid.length; i++)
    {
        for(let j = 0; j < grid[0].length; j++)
        {
            if(grid[i][j] === '1')
            {
                dfs(grid, i, j)
                count++
            }
        }
    }
    return count    
};

function dfs(mat: string[][], i: number, j: number) : void {
    if(i < 0 || i >= mat.length ||
    j < 0 || j >= mat[0].length || 
    mat[i][j] == '0') return
    mat[i][j] = '0'
    dfs(mat, i-1, j)
    dfs(mat, i+1, j)
    dfs(mat, i, j-1)
    dfs(mat, i, j+1)
}
