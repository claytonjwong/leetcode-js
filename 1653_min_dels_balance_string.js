/*
 * 1653. Minimum Deletions to Make String Balanced
 *
 * Q: https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
 * A: https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/discuss/938408/Kt-Js-Py3-Cpp-Prefix-%2B-Suffix
 */

let minimumDeletions = s => {
    let N = s.length;
    let A = s.split('');
    let prefix = Array(N).fill(0),
        suffix = Array(N).fill(0);
    let beg = 0,
        end = N - 1;
    for (let i = beg; i <= end; ++i) prefix[i] = Number(A[i] == 'b') + (beg < i ? prefix[i - 1] : 0);
    for (let i = end; beg <= i; --i) suffix[i] = Number(A[i] == 'a') + (i < end ? suffix[i + 1] : 0);
    return Math.min(..._.zip(prefix, suffix).map(([a, b]) => a + b)) - 1;  // ⭐️ -1 since we only need to delete 'a' xor 'b' at the optimal "pivot" index
};
