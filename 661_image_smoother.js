/*
 * 661. Image Smoother
 *
 * Q: https://leetcode.com/problems/image-smoother/
 * A: https://leetcode.com/problems/image-smoother/discuss/599157/Javascript-and-C%2B%2B-solutions
 */

let imageSmoother = A => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let ans = [...Array(M)].map(row => Array(N));
    let scale = (i, j, sum = A[i][j], cnt = 1) => {
        for (let dir of [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]) {
            let u = i + dir[0],
                v = j + dir[1];
            if (u < 0 || u == M || v < 0 || v == N)
                continue;
            sum += A[u][v], ++cnt;
        }
        return Math.floor(sum / cnt);
    };
    A.forEach((row, i) => row.forEach((col, j) => ans[i][j] = scale(i, j)));
    return ans;
};