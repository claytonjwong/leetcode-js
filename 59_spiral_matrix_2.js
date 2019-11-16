/*
 * 59. Spiral Matrix II
 *
 * Q: https://leetcode.com/problems/spiral-matrix-ii/
 * A: https://leetcode.com/problems/spiral-matrix-ii/discuss/430457/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number} N
 * @return {number[][]}
 */
var generateMatrix = (N, dirs=[[-1,0],[0,1],[1,0],[0,-1]], dir=2) => { // clockwise relative directions (up, right, down, left)
    let ans = [...Array(N)].map(row => Array(N));
    ans[0] = Array(N).fill().map((v, i) => i + 1); // first row
    let row = 0, col = N - 1; // top-right corner
    let step = N;
    let run = () => {
        row += dirs[dir][0];
        col += dirs[dir][1];
        ans[row][col] = ++step;
    };
    while (--N)
        for (let i=2; i--; dir = (dir + 1) % 4)
            for (let n=N; n--; run());
    return ans;
};

let ans = generateMatrix(3);
for (let row of ans)
    console.log(row);