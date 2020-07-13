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
