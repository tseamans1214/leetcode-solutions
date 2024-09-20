// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    // Sort the intervals by the starting number
    intervals.sort(function(a,b){
        return a[0] - b[0]
    })
    // Create empty mergedArray
    let mergedArray = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    // Loop through intervals
    for (let i=1; i<intervals.length; i++) {
        // if the end of the current interval is equal to or greater than the start of the next interval
        // And the end of the current interval is less than or equal to the end of the next interval
        if (end >= intervals[i][0] && end <= intervals[i][1]) {
            // set end to next interval end
            end = intervals[i][1]
        } else if (intervals[i][0] >= start && intervals[i][1] <= end) {
            // Do nothing because the current interval is in between
        } else {
            // if not, put current interval into merged array and set start to current interval
            mergedArray.push([start,end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
        // If it is the last interval, push it to the merged array.
        if (i == intervals.length-1) {
                mergedArray.push([start,end]);
        }
    }
    // Return mergedArray
    return mergedArray;
};
