/*
 * 54. Spiral Matrix
 *
 * Q: https://leetcode.com/problems/spiral-matrix/
 * A: https://leetcode.com/problems/spiral-matrix/discuss/521533/Javascript-and-C%2B%2B-solutions
 */

 let spiralOrder = (A, i = 0, j = 0, seen = new Set(), ans = []) => {
    let M = A.length,
        N = M == 0 ? 0 : A[0].length;
    let dir = 0, dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    while (seen.size < M * N) {
        if (!seen.has(`${i},${j}`))
            ans.push(A[i][j]),
            seen.add(`${i},${j}`);
        let u = i + dirs[dir][0],
            v = j + dirs[dir][1];
        if (0 <= u && u < M && 0 <= v && v < N && !seen.has(`${u},${v}`))
            i = u,
            j = v;
        else if (++dir == dirs.length)
            dir = 0;
    }
    return ans;
};