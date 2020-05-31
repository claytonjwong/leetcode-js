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