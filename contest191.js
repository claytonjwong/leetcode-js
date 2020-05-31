/*
 * https://leetcode.com/contest/weekly-contest-191
 *
 * Rank           Name            Score   Finish Time   Q1 (3)    Q2 (4)    Q3 (5)    Q4 (7)
 * 1323 / 9597    claytonjwong    12      0:44:22       0:01:54   0:12:44   0:44:22
 */

/*
 * 1464. Maximum Product of Two Elements in an Array
 *
 * Q: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 * A: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/discuss/661624/Javascript-and-C%2B%2B-solutions
 */
let maxProduct = A => A.sort((a, b) => a - b).slice(A.length - 2).reduce((a, b) => (a - 1) * (b - 1));

/*
 * 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 *
 * Q: https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 * A: https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/discuss/661630/Javascript-and-C%2B%2B-solutions
 */
let maxArea = (M, N, row, col) =>
    row.concat(0, M).sort((a, b) => a - b).map((_, i, row) => 0 < i ? row[i] - row[i - 1] : 0).reduce((a, b) => Math.max(a, b)) *
    col.concat(0, N).sort((a, b) => a - b).map((_, j, col) => 0 < j ? col[j] - col[j - 1] : 0).reduce((a, b) => Math.max(a, b)) % (1e9 + 7);

/*
 * 1466. Reorder Routes to Make All Paths Lead to the City Zero
 *
 * Q: https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 * A: https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/discuss/661712/Javascript-and-C%2B%2B-solutions
 */
let minReorder = (N, E, m = new Map(), roads = new Set(), ans = 0) => {
    let addRoad = (u, v) => roads.add(`${u},${v}`);
    let hasRoad = (u, v) => roads.has(`${u},${v}`);
    E.forEach(([u, v]) => {
        m.set(u, (m.get(u) || new Set()).add(v));
        m.set(v, (m.get(v) || new Set()).add(u));
        addRoad(v, u);
    });
    let q = [ 0 ];
    let seen = new Set([ 0 ]);
    while (q.length) {
        let u = q.shift();
        for (let v of (m.get(u) || [])) {
            if (seen.has(v))
                continue;
            if (!hasRoad(u, v))
                ++ans;
            q.push(v), seen.add(v);
        }
    }
    return ans;
};