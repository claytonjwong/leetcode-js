/*
 * 1301. Number of Paths with Max Score
 *
 * Q: https://leetcode.com/problems/number-of-paths-with-max-score/
 * A: https://leetcode.com/problems/number-of-paths-with-max-score/discuss/483085/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {string[]} board
 * @return {number[]}
 */
let pathsWithMaxScore = A => {
    let N = A.length, dirs = [[-1,-1],[-1,0],[0,-1]], mod = Number(1e9 + 7);
    let P = [...Array(N + 1)].map(row => Array(N + 1).fill(0)),
        S = [...Array(N + 1)].map(row => Array(N + 1).fill(0));
    A[0][0] = A[N - 1][N - 1] = '0';
    P[0][0] = 1;
    for (let i = 1; i <= N; ++i) {
        for (let j = 1; j <= N; ++j) {
            if (A[i - 1][j - 1] == 'X')
                continue;
            for (let d of dirs) {
                let u = i + d[0],
                    v = j + d[1];
                let sum = !P[u][v] ? 0 : S[u][v] // if there's no path, then the sum is 0, otherwise use DP matrix S
                        + (i == 1 && j == 1 ? 0 : i == N && j == N ? 0 : A[i - 1].charCodeAt(j - 1) - '0'.charCodeAt(0)); // 'E' and 'S' value = 0, otherwise dp matrix is offset from A by 1 to build upon itself, thus i - 1 and j - 1.  Subtract each ascii ordinal value by '0' to offset to 0
                if (S[i][j] == sum)
                    P[i][j] = (P[i][j] + P[u][v]) % mod;
                if (S[i][j] < sum)
                    S[i][j] = sum,
                    P[i][j] = P[u][v];
            }
        }
    }
    return [S[N][N], P[N][N]];
};
console.log(...pathsWithMaxScore(['E23','2X2','12S']));