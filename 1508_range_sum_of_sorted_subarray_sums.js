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