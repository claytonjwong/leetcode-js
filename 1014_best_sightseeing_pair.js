/*
 * 1014. Best Sightseeing Pair
 *
 * Q: https://leetcode.com/problems/best-sightseeing-pair/
 * A: https://leetcode.com/problems/best-sightseeing-pair/discuss/592496/Javascript-and-C%2B%2B-solutions
 */

// brute-force TLE
let maxScoreSightseeingPair = (A, max = 0) => {
    let score = (i, j) => A[i] + A[j] + i - j;
    for (let i = 0; i < A.length; ++i)
        for (let j = i + 1; j < A.length; ++j)
            max = Math.max(max, score(i, j));
    return max
};

// linear AC
let maxScoreSightseeingPair = (A, max = 0) => {
    let score = (i, j) => A[i] + A[j] + i - j;
    for (let i = 0, j = 1; j < A.length; ++j) {
        max = Math.max(max, score(i, j));
        if (A[i] + i < A[j] + j)
            i = j; // best i found at j
    }
    return max;
};
