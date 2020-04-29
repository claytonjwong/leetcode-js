/*
 * 1030. Matrix Cells in Distance Order
 *
 * Q: https://leetcode.com/problems/matrix-cells-in-distance-order/
 * A: https://leetcode.com/problems/matrix-cells-in-distance-order/discuss/602624/Javascript-and-C%2B%2B-solutions
 */

let allCellsDistOrder = (R, C, x, y, ans = []) => {
    for (let a = 0; a < R; ++a)
        for (let b = 0; b < C; ++b)
            ans.push([a, b]);
    let abs = Math.abs;
    return ans.sort((a, b) => {
        let [i, j] = a,
            [u, v] = b;
        return (abs(i - x) + abs(j - y)) - ((abs(u - x) + abs(v - y)));
    });
};