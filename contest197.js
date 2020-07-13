/*
 * https://leetcode.com/contest/weekly-contest-197/ranking/146/
 * https://www.youtube.com/watch?v=-oXf4Ikou_c&t=777s
 *
 * Rank            Name            Score    Finish Time    Q1 (3)     Q2 (4)	    Q3 (5)    Q4 (7)
 * 3645 / 13984    claytonjwong    7        0:16:24        0:00:59    0:11:24 *1
 */

/*
 * 1512. Number of Good Pairs
 *
 * Q: https://leetcode.com/problems/number-of-good-pairs/
 * A: https://leetcode.com/problems/number-of-good-pairs/discuss/731629/Javascript-and-C%2B%2B-solutions
 */
// 1-liner
let numIdenticalPairs = A => A.map((_, i) => i + 1 == A.length ? 0 : A.slice(i).map((_, j) => Number(A[i] == A[i + j + 1])).reduce((a, b) => a + b)).reduce((a, b) => a + b);
// verbose
let numIdenticalPairs = (A, cnt = 0) => {
    let N = A.length;
    for (let i = 0; i < N; ++i)
        for (let j = i + 1; j < N; ++j)
            cnt += A[i] == A[j];
    return cnt;
};

 /*
 * 1513. Number of Substrings With Only 1s
 *
 * Q: https://leetcode.com/problems/number-of-substrings-with-only-1s/
 * A: https://leetcode.com/problems/number-of-substrings-with-only-1s/discuss/731600/Javascript-and-C%2B%2B-solutions
 */
// 1-liner
let numSub = (s, sum = n => Math.floor((n * (n + 1)) / 2)) => s.split('0').map(run => sum(run.length)).reduce((a, b) => (a + b) % (1e9 + 7));
// 2-liner
let sum = n => Math.floor((n * (n + 1)) / 2);
let numSub = s => s.split('0').map(run => sum(run.length)).reduce((a, b) => (a + b) % (1e9 + 7));
