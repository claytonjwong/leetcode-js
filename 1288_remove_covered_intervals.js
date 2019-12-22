/*
 * 1288. Remove Covered Intervals
 *
 * Q: https://leetcode.com/problems/remove-covered-intervals/
 * A: https://leetcode.com/problems/remove-covered-intervals/discuss/457523/Javascript-and-C%2B%2B-solutions
 */

/*
let removeCoveredIntervals = (A, max = 0, cnt = 0) => {
    A.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < A.length; ++i)
        if (A[i][1] > max)
            max = A[i][1], ++cnt;
    return cnt;
}
*/

let removeCoveredIntervals = (A, max = 0, cnt = 0) => {
    A.sort((a, b) => a[0] - b[0]);
    return A.filter(x => {
        if (x[1] <= max)
            return false;
        max = x[1];
        return true;
    }).length;
}

let ans = removeCoveredIntervals([[1,4], [3,6], [2,8]]);
console.log(ans);