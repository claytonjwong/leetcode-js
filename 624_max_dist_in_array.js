/*
 * 624. Maximum Distance in Arrays
 *
 * Q: https://leetcode.com/problems/maximum-distance-in-arrays/
 * A: https://leetcode.com/problems/maximum-distance-in-arrays/discuss/104653/Javascript-Python3-C%2B%2B-MinMax-solutions
 */

let maxDistance = (A, best = 0) => {
    let N = A.length;
    let lo = i => A[i][0],
        hi = i => A[i][A[i].length - 1];
    let min = lo(0),
        max = hi(0);
    for (let i = 1; i < N; ++i) {
        best = Math.max(best, Math.abs(min - hi(i)), Math.abs(max - lo(i)));
        min = Math.min(min, lo(i));
        max = Math.max(max, hi(i));
    }
    return best;
};
