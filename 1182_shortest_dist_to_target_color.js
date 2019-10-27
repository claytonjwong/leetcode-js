/*

 1182. Shortest Distance to Target Color

 Q: https://leetcode.com/problems/shortest-distance-to-target-color/
 A: https://leetcode.com/problems/shortest-distance-to-target-color/discuss/401165/Javascript-and-C%2B%2B-Solutions

 */

/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = (colors, queries, INF=1e5, ans=[]) => {
    const N = colors.length;
    var L = [...Array(N)].map(() => Array(3+1).fill(INF)),
        R = [...Array(N)].map(() => Array(3+1).fill(INF));
    for (let i=0; i < N; ++i)
        for (let j=1; j <= 3; ++j)
            if (colors[i] == j)
                L[i][j] = 0;
            else if (i > 0)
                L[i][j] = L[i-1][j] < INF ? L[i-1][j] + 1 : INF;
    for (let i=N-1; i >=0; --i)
        for (let j=1; j <= 3; ++j)
            if (colors[i] == j)
                R[i][j] = 0;
            else if (i < N-1)
                R[i][j] = R[i+1][j] < INF ? R[i+1][j] + 1 : INF;
    for (const [i, j] of queries) {
        const dist = Math.min(L[i][j], R[i][j]);
        ans.push(dist < INF ? dist : -1);
    }
    return ans;
};

const ans = shortestDistanceColor([1,1,2,1,3,2,2,3,3], [[1,3],[2,2],[6,1]]);
console.log("ans: " + ans);
