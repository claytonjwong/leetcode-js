/*
 * https://leetcode.com/contest/biweekly-contest-30/ranking/76/
 * https://www.youtube.com/watch?v=ga0jkKfRGDo&feature=youtu.be
 *
 * Rank          Name           Score   Finish Time    Q1 (3)     Q2 (4)     Q3 (5)	      Q4 (6)
 * 1885 / 8174   claytonjwong   12      0:33:31        0:04:41    0:11:16    0:23:31 *2
 */

/*
 * 1507. Reformat Date
 *
 * Q: https://leetcode.com/problems/reformat-date/
 * A: https://leetcode.com/problems/reformat-date/discuss/730585/Javascript-and-C%2B%2B-solutions
 */
let reformatDate = date => new Date(date.replace('th', '').replace('st', '').replace('nd', '').replace('rd', '')).toISOString().slice(0, 10);

let reformatDate = date => {
    let [d, m, y] = date.split(' ');
    d = d.slice(0, d.length - 2);
    if (d.length == 1)
        d = '0' + d;
	if (m == 'Jan') m = '01';
	if (m == 'Feb') m = '02';
	if (m == 'Mar') m = '03';
	if (m == 'Apr') m = '04';
	if (m == 'May') m = '05';
	if (m == 'Jun') m = '06';
	if (m == 'Jul') m = '07';
	if (m == 'Aug') m = '08';
	if (m == 'Sep') m = '09';
	if (m == 'Oct') m = '10';
	if (m == 'Nov') m = '11';
	if (m == 'Dec') m = '12';
    return [y, m, d].join('-');
};

/*
 * 1508. Range Sum of Sorted Subarray Sums
 *
 * Q: https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/
 * A: https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/discuss/730561/Javascript-and-C%2B%2B-solutions
 */
let rangeSum = (A, N, L, R, sums = [], mod = 1e9 + 7, ans = 0) => {
    for (let i = 0; i < N; ++i) {
        let sum = 0;
        for (let j = i; j < N; ++j)
            sums.push(sum = (sum + A[j]) % mod);
    }
    sums.sort((a, b) => a - b);
    for (let i = L - 1; i <= R - 1; ++i) // -1 for 1-based indexing to 0-based indexing
        ans = (ans + sums[i]) % mod;
    return ans;
};

/*
 * 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
 *
 * Q: https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
 * A: https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/discuss/730531/Javascript-and-C%2B%2B-solutions
 */
let minDifference = (A, min = Infinity) => {
    let N = A.length;
    let minDiff = A => {
        if (!A.length)
            return 0;
        return Math.max(...A) - Math.min(...A);
    };
    A.sort((a, b) => a - b);
    for (let i = 0; i < 3; ++i) {
        min = Math.min(min, minDiff(A.slice(0, N - 3)), minDiff(A.slice(3)));
        A.push(A.shift())
    }
    return min;
};
