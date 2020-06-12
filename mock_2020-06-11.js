/*
 * Uber- Online Assessment
 * Completed June 11, 2020 6:54 PM
 * 93%
 * Your interview score of 7.83/10 beats 93% of all users.
 * Time Spent: 23 minutes 13 seconds
 * Time Allotted: 1 hour
 */

/*
 * 290. Word Pattern
 *
 * Q: https://leetcode.com/problems/word-pattern/
 * A: https://leetcode.com/problems/word-pattern/discuss/622795/Javascript-and-C%2B%2B-solutions
 */
let wordPattern = (chars, words, mc = new Map(), mw = new Map()) => {
    let C = chars.split(''),
        W = words.split(' ');
    if (C.length != W.length)
        return false;
    for (let i = 0; i < C.length; ++i) {
        if (mc.has(C[i]) && mc.get(C[i]) != W[i]) return false;
        if (mw.has(W[i]) && mw.get(W[i]) != C[i]) return false;
        mc.set(C[i], W[i]);
        mw.set(W[i], C[i]);
    }
    return true;
};

/*
 * 542. 01 Matrix
 *
 * Q: https://leetcode.com/problems/01-matrix/
 * A: https://leetcode.com/problems/01-matrix/discuss/682748/Javascript-and-C%2B%2B-solutions
 */
let updateMatrix = (A, q = [], seen = new Set()) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (!A[i][j])
                q.push([i, j]), seen.add(`${i},${j}`);
    let depth = 1;
    while (q.length) {
        let K = q.length;
        while (K--) {
            let [i, j] = q.shift();
            for (let dir of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
                let u = i + dir[0],
                    v = j + dir[1];
                if (0 <= u && u < M && 0 <= v && v < N && !seen.has(`${u},${v}`)) {
                    A[u][v] = depth;
                    q.push([u, v]), seen.add(`${u},${v}`);
                }
            }
        }
        ++depth;
    }
    return A;
};
