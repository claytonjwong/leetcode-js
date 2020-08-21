/*
 * 1554. Strings Differ by One Character
 *
 * Q: https://leetcode.com/problems/strings-differ-by-one-character/
 * A: https://leetcode.com/problems/strings-differ-by-one-character/discuss/804559/Javascript-Python3-C%2B%2B-Diff-Collision-Base-123
 */

let differByOne = (A, MOD = 1e13, seen = new Set()) => {
    let M = A.length,
        N = A[0].length;
    let hash = Array(M).fill(0),
        ord = c => c.charCodeAt(0);
    // 1. generate each i-th rolling hash
    for (let i = 0; i < M; ++i) {
        let base = 1;
        for (let j = 0; j < N; ++j) {
            hash[i] = (hash[i] + base * ord(A[i][j])) % MOD;
            base = 123 * base % MOD;
        }
    }
    // 2. remove each j-th char from each i-th rolling hash to 🔍 find a diff collision 💥
    for (let i = 0; i < M; ++i) {
        let base = 1;
        for (let j = 0; j < N; ++j) {
            let diff = (hash[i] - base * ord(A[i][j])) % MOD;
            if (seen.has(diff))
                return true;  // 🎯 found a diff collision 💥
            seen.add(diff);
            base = 123 * base % MOD;
        }
    }
    return false;
};
