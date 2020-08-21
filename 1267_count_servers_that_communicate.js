/*
 * 1267. Count Servers that Communicate
 *
 * Q: https://leetcode.com/problems/count-servers-that-communicate/
 * A: https://leetcode.com/problems/count-servers-that-communicate/discuss/438394/Javascript-Python3-C%2B%2B-Count-per-Row-and-Column
 */

let countServers = (A, servers = [], cnt = 0) => {
    let M = A.length,
        N = A[0].length;
    let row = Array(M).fill(0),
        col = Array(N).fill(0);
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j] == 1)
                servers.push([ i, j ]),
                ++row[i],
                ++col[j];
    for (let [i, j] of servers)
        if (1 < row[i] || 1 < col[j])
            ++cnt;
    return cnt;
};
