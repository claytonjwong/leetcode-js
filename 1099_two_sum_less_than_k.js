/*
 * 1099. Two Sum Less Than K
 *
 * Q: https://leetcode.com/problems/two-sum-less-than-k/
 * A: https://leetcode.com/problems/two-sum-less-than-k/discuss/603797/Javascript-and-C%2B%2B-solutions
 */

let twoSumLessThanK = (A, K, max = -1) => {
    let N = A.length;
    for (let i = 0; i < N; ++i)
        for (let j = i + 1; j < N; ++j)
            if (max < A[i] + A[j] && A[i] + A[j] < K)
                max = A[i] + A[j];
    return max;
};