/*
 * 1324. Print Words Vertically
 *
 * Q: https://leetcode.com/problems/print-words-vertically/
 * A: https://leetcode.com/problems/print-words-vertically/discuss/485298/Javascript-Python3-C%2B%2B-Straightforward-solutions
 */

let printVertically = (s, ans = []) => {
    A = s.split(' ');
    N = A.length;
    K = Math.max(...A.map(word => word.length));
    A = A.map(word => _.padEnd(word, K));
    for (let j = 0; j < K; ++j) {
        let word = [];
        for (i = 0; i < N; ++i)
            word.push(A[i][j]);
        ans.push(_.trimEnd(word.join('')));
    }
    return ans;
};
