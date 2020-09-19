/*
 * 1588. Sum of All Odd Length Subarrays
 *
 * Q: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 * A: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/discuss/854147/Javascript-Python3-C%2B%2B-Prefix-Sums
 */

let sumOddLengthSubarrays = (A, sum = 0) => {
    let N = A.length;
    let S = Array(N + 1).fill(0);
    for (let i = 1; i <= N; ++i)
        S[i] = S[i - 1] + A[i - 1];            // 🧩 prefix sums
    for (let i = 0; i < N; ++i)
        for (let j = 1; i + j <= N; j += 2)    // 👀 odd length j: 1, 3, 5, ...
            sum += S[i + j] - S[i];
    return sum;                                // 🎯 sum of odd length subarrays
};
