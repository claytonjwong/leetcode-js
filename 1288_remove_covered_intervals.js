/*
 * 1288. Remove Covered Intervals
 *
 * Q: https://leetcode.com/problems/remove-covered-intervals/
 * A: https://leetcode.com/problems/remove-covered-intervals/discuss/457523/Javascript-Python3-C%2B%2B-Sort-%2B-Linear-Scan
 */

let removeCoveredIntervals = (A, x = 0) => {
    A.sort(([ a, b ], [ c, d ]) => a == c ? d - b : a - c);
    let ok = (a, b, c, d) => a <= c && d <= b;
    let N = A.length,
        i = 0,
        j = 1;
    while (j < N)
        if (ok(...A[i], ...A[j]))
            ++x,
            ++j;
        else
            i = j++;
    return N - x;
};
