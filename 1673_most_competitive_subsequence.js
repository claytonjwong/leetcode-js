/*
 * 1673. Find the Most Competitive Subsequence
 *
 * Q: https://leetcode.com/problems/find-the-most-competitive-subsequence/
 * A: https://leetcode.com/problems/find-the-most-competitive-subsequence/discuss/952775/Kt-Js-Py3-Cpp-Monotonic-Queue
 */

let mostCompetitive = (A, K, S = []) => {
    let N = A.length,
        i = 0;
    while (i < N)
        if (S.length && A[i] < S[S.length - 1] && i + K - S.length < N)  // 📈 maintain monotonic queue invariant
            S.pop();
        else
            S.push(A[i++]);
    return S.slice(0, K);
};
