/*
 * 1099. Two Sum Less Than K
 *
 * Q: https://leetcode.com/problems/two-sum-less-than-k/
 * A: https://leetcode.com/problems/two-sum-less-than-k/discuss/603797/Kt-Js-Py3-Cpp-Greedy-%2B-Brute-Force-solutions
 */

// greedy
let twoSumLessThanK = (A, K, best = -1) => {
    A.sort((a, b) => a - b);
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i < j) {
        if (A[i] + A[j] < K) {
            best = Math.max(best, A[i] + A[j]);
            ++i;
        } else {
            --j;
        }
    }
    return best;
};

// brute-force
let twoSumLessThanK = (A, K, best = -1) => {
    let N = A.length;
    for (let i = 0; i < N; ++i)
        for (let j = i + 1; j < N; ++j)
            if (A[i] + A[j] < K)
                best = Math.max(best, A[i] + A[j]);
    return best;
};
