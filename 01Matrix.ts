/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
The distance between two cells sharing a common edge is 1.
Example 1:
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]*/
function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length
    const n = mat[0].length
    const updatedMatrix: number[][] = Array.from(new Array(m), () => new Array(n));
    const isValidCell = (m: number, n: number, x: number, y: number): boolean => {
        return x>=0 && x < m && y >= 0 && y < n
    }
    const directions: [number, number][] = [
        [1, 0],//right
        [0, 1], //bottom
        [-1, 0], // left
        [0, -1] //top
    ]
    const queue = []

    for(let i = 0; i < m; i++)
    {
        for(let j = 0; j < n; j++)
        {
            if(mat[i][j] === 0)
            {
                updatedMatrix[i][j] = 0
                queue.push([[i, j], 0])
            }
            else
            {
                updatedMatrix[i][j] = -1
            }
        }
    }

    while(queue.length > 0)
    {
        const [[x,y], steps] = queue.shift()
        for(const [shiftX, shiftY] of directions)
        {
            const nextX = x + shiftX
            const nextY = y + shiftY
            if(isValidCell(m,n,nextX, nextY) && updatedMatrix[nextX][nextY] == -1)
            {
                updatedMatrix[nextX][nextY] = steps + 1
                queue.push([[nextX, nextY], steps + 1])
            }
        }
    }
    return updatedMatrix

    
};
