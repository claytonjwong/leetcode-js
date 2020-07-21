/*
 * 79. Word Search
 *
 * Q: https://leetcode.com/problems/word-search/
 * A: https://leetcode.com/problems/word-search/discuss/747545/Javascript-Python3-C%2B%2B-DFS-%2B-BT
 */

let exist = (A, T, path = [], seen = new Set()) => {
    let M = A.length,
        N = A[0].length;
    let go = (i, j) => {
        // 🛑 OOB, char mismatch, or already seen
        if (i < 0 || i == M || j < 0 || j == N || A[i][j] != T[path.length] || seen.has(`${i},${j}`))
            return false;
        // 🚀 DFS + BT
        path.push(A[i][j]), seen.add(`${i},${j}`); // 👀 path seen ✅ forward-tracking
        if (path.length == T.length)
            return true; // ⭐️ path == target T 🎯
        for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]]) // clockwise directions: [ 👆, 👉, 👇, 👈 ]
            if (go(u, v))
                return true;
        path.pop(), seen.delete(`${i},${j}`);      // 👀 path seen 🚫 back-tracking
        return false;
    };
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (go(i, j))
                return true;
    return false;
};
