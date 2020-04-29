/*
 * 999. Available Captures for Rook
 *
 * Q: https://leetcode.com/problems/available-captures-for-rook/
 * A: https://leetcode.com/problems/available-captures-for-rook/discuss/602385/Javascript-and-C%2B%2B-solutions
 */

let numRookCaptures = (A, i = -1, j = -1, cnt = 0) => {
    A.forEach((row, u) =>
        row.forEach((col, v) => {
            if (A[u][v] == 'R')
                i = u,
                j = v;
    }));
    let ok = x => 0 <= x && x < 8;
    for (let d of [[-1, 0], [0, 1], [1, 0], [0, -1]]) { // clockwise directions [👆, 👉, 👇, 👈]
        for (let u = i + d[0], v = j + d[1]; ok(u) && ok(v); u += d[0], v += d[1]) {
            if (A[u][v] == 'p')
                ++cnt; // black pawn 🎯
            if (A[u][v] != '.')
                break; // non-empty square
        }
    }
    return cnt;
};