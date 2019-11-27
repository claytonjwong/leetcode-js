/*
 * 1267. Count Servers that Communicate
 *
 * Q: https://leetcode.com/problems/count-servers-that-communicate/
 * A: https://leetcode.com/problems/count-servers-that-communicate/discuss/438394/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[][]} A
 * @return {number}
 */
let countServers = (A, servers=[], ans=0) => {
    let M = A.length,
        N = A[0].length;
    let row = [...Array(M)].fill(0),
        col = [...Array(N)].fill(0);
    for (let i=0; i < M; ++i)
        for (let j=0; j < N; ++j)
            if (A[i][j] == 1)
                servers.push([i,j]),
                ++row[i],
                ++col[j];
    for (let [i,j] of servers)
        if (row[i] > 1 || col[j] > 1)
            ++ans;
    return ans;
};

let A = [[0,1],[1,0]];
let ans = countServers(A);
console.log(ans);