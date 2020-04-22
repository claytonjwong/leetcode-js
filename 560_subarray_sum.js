/*
 * 560. Subarray Sum Equals K
 *
 * Q: https://leetcode.com/problems/subarray-sum-equals-k/
 * A: https://leetcode.com/problems/subarray-sum-equals-k/discuss/592292/Javascript-and-C%2B%2B-solutions
 */

let subarraySum = (A, T, seen = new Map(), cnt = 0) => {
    let N = A.length;
    let S = Array(N + 1).fill(0);
    for (let i = 1; i <= N; ++i)
        S[i] = S[i - 1] + A[i - 1]; // prefix sums S of input array A
    for (let i = 0; i <= N; ++i) {
        let x = S[i],
            y = S[i] - T; // target 🎯
        cnt += (seen.get(y) || 0);
        seen.set(x, 1 + (seen.get(x) || 0));
    }
    return cnt;
};