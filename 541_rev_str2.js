/*
 * 541. Reverse String II
 *
 * Q: https://leetcode.com/problems/reverse-string-ii/
 * A: https://leetcode.com/problems/reverse-string-ii/discuss/596912/Javascript-and-C%2B%2B-solutions
 */

let reverseStr = (S, K, ans = []) => {
    let N = S.length;
    for (let i = 0; i < N; i += 2 * K) {
        let j = Math.min(i + K, N);
        let rev = S.substring(i, j).split('').reverse();
        ans.push(...rev);
        while (j < i + 2 * K && j < N)
            ans.push(S[j++]);
    }
    return ans.join('');
};

let reverseStr = (S, K) => {
    let A = S.split('');
    let N = A.length;
    for (let i = 0; i < N; i += 2 * K) {
        let L = i, R = Math.min(i + K, N) - 1; // -1 for L..R inclusive
        while (L < R)
            [A[L++], A[R--]] = [A[R], A[L]];
    }
    return A.join('');
}