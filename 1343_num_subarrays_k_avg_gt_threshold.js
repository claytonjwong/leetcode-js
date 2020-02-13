/*
 * 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 *
 * Q: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 * A: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/discuss/507957/Javascript-and-C%2B%2B-solutions
 */

// let numOfSubarrays = (A, K, T, ans = 0) => {
//     let N = A.length;
//     let S = Array(N + 1).fill(0);
//     for (let i = 1; i <= N; ++i)
//         S[i] = S[i - 1] + A[i - 1];
//     for (let i = 0, j = i + K; i + K <= N; ++i, ++j) {
//         let sum = S[j] - S[i];
//         let avg = sum / K;
//         if (avg >= T)
//             ++ans;
//     }
//     return ans;
// };

let numOfSubarrays = (A, K, T, ans = 0) => {
    let N = A.length;
    let S = Array(N + 1).fill(0);
    for (let i = 1; i <= N; ++i)
        S[i] = S[i - 1] + A[i - 1];
    for (let i = 0, j = i + K; i + K <= N; ++i, ++j)
        if ((S[j] - S[i]) / K >= T)
            ++ans;
    return ans;
};