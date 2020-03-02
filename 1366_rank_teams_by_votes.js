/*
 * 1366. Rank Teams by Votes
 *
 * Q: https://leetcode.com/problems/rank-teams-by-votes/
 * A: https://leetcode.com/problems/rank-teams-by-votes/discuss/526803/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {string[]} votes
 * @return {string}
 */

let rankTeams = (A, m = {}) => {
    let M = A.length,
        N = A[0].length;
    for (let i = 0; i < M; ++i) {
        for (let j = 0; j < N; ++j) {
            let k = A[i][j];
            if (!m[k])
                m[k] = Array(26).fill(0);
            ++m[k][j];
        }
    }
    return [...Object.entries(m)].sort((a, b) => {
        for (let i = 0; i < 26; ++i) {
            if (a[1][i] < b[1][i]) return  1;
            if (b[1][i] < a[1][i]) return -1;
        }
        return a[0].localeCompare(b[0]);
    }).map(a => a[0]).join('');
};