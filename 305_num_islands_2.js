/*
 * 305. Number of Islands II
 *
 * Q: https://leetcode.com/problems/number-of-islands-ii/
 * A: https://leetcode.com/problems/number-of-islands-ii/discuss/563274/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} land
 * @return {number[]}
 */

let numIslands2 = (M, N, land, cnt = 0, ans = []) => {
    let P = Array(M * N).fill(-1); // -1 is water and i-th row, j-th col is N * i + j
    let find = x => P[x] = P[x] == x ? x : find(P[x]);
    for (let [i, j] of land) {
        let x = N * i + j;
        if (P[x] != -1) {
            ans.push(cnt); // land already exists❗️
            continue;
        }
        P[x] = x; // parent representative of itself
        ++cnt; // increment islands 👍
        for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]]) { // clockwise: { 👆, 👉, 👇, 👈 }
            let y = N * u + v;
            if (u < 0 || u >= M || v < 0 || v >= N || P[y] == -1)
                continue;
            x = find(x);
            y = find(y);
            if (x != y) {
                P[x] = y; // arbitrary union choice
                --cnt; // decrement islands 👎
            }
        }
        ans.push(cnt);
    }
    return ans;
};
// console.log(numIslands2(3, 3, [[0,0],[0,1],[1,2],[1,2]]));
console.log(...numIslands2(3, 3, [[0,0],[0,1],[1,2],[2,1],[1,0],[0,0],[2,2],[1,2],[1,1],[0,1]]));