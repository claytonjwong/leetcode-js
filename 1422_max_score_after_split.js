 /*
 * 1422. Maximum Score After Splitting a String
 *
 * Q: https://leetcode.com/problems/maximum-score-after-splitting-a-string/
 * A: https://leetcode.com/problems/maximum-score-after-splitting-a-string/discuss/598801/Javascript-and-C%2B%2B-solutions
 */

let maxScore = (s, max = 0) => {
    let A = s.split('').map(Number);
    let N = A.length;
    let L = Array(N),
        R = Array(N);
    for (let i = 0; i < N; ++i)
        L[i] = (A[i] == 0) + (i > 0 ? L[i - 1] : 0);     // prefix sums from 👉 (L)eft-to-right
    for (let i = N - 1; i >= 0; --i)
        R[i] = (A[i] == 1) + (i < N - 1 ? R[i + 1] : 0); // prefix sums from 👈 (R)ight-to-left
    for (let i = 1; i < N; ++i)
        max = Math.max(max, L[i - 1] + R[i]);
    return max;
};

let maxScore = (S, max = 0) => {
    let N = S.length;
    let zero = Number(S[0] == '0'),
         one = [...S].filter(c => c == '1').length - (S[0] == '1' ? 1 : 0);
    for (let i = 1; i < N; ++i) {
        max = Math.max(max, zero + one);
        zero += S[i] == '0';
         one -= S[i] == '1';
    }
    return max;
};