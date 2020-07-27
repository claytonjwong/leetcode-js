/*
 * 1528. Shuffle String
 *
 * Q: https://leetcode.com/problems/shuffle-string/
 * A: https://leetcode.com/problems/shuffle-string/discuss/756041/Javascript-Python3-C%2B%2B-create-t-from-s
 */
let restoreString = (s, A) => _.zip(A, s.split('')).sort((a, b) => a[0] - b[0]).map(pair => pair[1]).join('');

let restoreString = (s, A) => {
    let N = A.length;
    let t = Array(N);
    for (let i = 0; i < N; ++i)
        t[A[i]] = s[i];
    return t.join('');
};
