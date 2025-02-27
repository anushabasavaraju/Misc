/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1
Constraints:
1 <= intervals.length <= 104
0 <= starti < endi <= 106 */

function minMeetingRooms(intervals: number[][]): number {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    let minHeap: number[] = []
    minHeap.push(intervals[0][1])
 
    for(let i = 1; i < intervals.length; i++)
    {
        if(intervals[i][0] >= minHeap[0])
        {
            minHeap.shift()
            minHeap.push(intervals[i][1])
            minHeap.sort((a,b) => a-b)
        }
        else
        {
            minHeap.push(intervals[i][1])
            minHeap.sort((a,b) => a-b)
        }
    }
    return minHeap.length;    
};
