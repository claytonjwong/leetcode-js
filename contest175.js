/*
Weekly Contest 175

Score	Finish Time	    AC	    Ranking
7/19	0:14:14	        2/4	    1375/5781
*/

/*
 * 1346. Check If N and Its Double Exist
 *
 * Q: https://leetcode.com/problems/check-if-n-and-its-double-exist/
 * A: https://leetcode.com/problems/check-if-n-and-its-double-exist/discuss/509104/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
let checkIfExist = (A, seen = new Set()) => {
    for (let x of A) {
        if (seen.has(x / 2) || seen.has(x * 2))
            return true;
        seen.add(x);
    }
    return false;
};

/*
 * 1347. Minimum Number of Steps to Make Two Strings Anagram
 *
 * Q: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
 * A: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/discuss/509106/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// let minSteps = (s, t, m = {}, ans = 0) => {
//     for (let c of s) {
//         if (!m[c])
//             m[c] = 0;
//         ++m[c];
//     }
//     for (let c of t)
//         if (!m[c] || m[c]-- <= 0)
//             ++ans;
//     return ans;
// };

let minSteps = (s, t, A = Array(123).fill(0)) => {
    for (let i = 0; i < s.length; ++i)
        ++A[s[i].charCodeAt(0)],
        --A[t[i].charCodeAt(0)];
    return A.reduce((a, b) => a + Math.abs(b));
};

/*
 * 1349. Maximum Students Taking Exam
 *
 * Q: https://leetcode.com/problems/maximum-students-taking-exam/
 * A:
 */

// TLE -- DFS + BT
let maxStudents = (A, ans = 0) => {
    let M = A.length,
        N = A[0].length;
    let ok = (i, j) => {
        if (A[i][j] == '#' || A[i][j] == 'x')
            return false;
        let frontLeft = i == 0 || j == 0 || A[i - 1][j - 1] != 'x';
        let frontRight = i == 0 || j == N - 1 || A[i - 1][j + 1] != 'x';
        let left = j == 0 || A[i][j - 1] != 'x';
        let right = j == N - 1 || A[i][j + 1] != 'x';
        return frontLeft && frontRight && left && right;
    };
    let dfs = (u = 0, v = 0, cnt = 0) => {
        ans = Math.max(ans, cnt);
        for (let i = u; i < M; ++i) {
            for (let j = v; j < N; ++j) {
                if (ok(i, j)) {
                    A[i][j] = 'x';
                    dfs(i, j, cnt + 1);
                    A[i][j] = '.';
                }
            }
            v = 0;
        }
    };
    dfs();
    return ans;
};
let ans = maxStudents(
    [["#",".",".",".","#"],
    [".","#",".","#","."],
    [".",".","#",".","."],
    [".","#",".","#","."],
    ["#",".",".",".","#"]]
);
console.log(ans);