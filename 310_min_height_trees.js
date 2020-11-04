/*
 * 310. Minimum Height Trees
 *
 * Q: https://leetcode.com/problems/minimum-height-trees/
 * A: https://leetcode.com/problems/minimum-height-trees/discuss/118585/Kt-Js-Py3-Cpp-BFS-Prune-Leaves
 */

let findMinHeightTrees = (N, E, adj = new Map(), q = []) => {
    if (!E.length)
        return [ 0 ];
    E.forEach(([ u, v ]) => {
        adj.set(u, (adj.get(u) || new Set()).add(v));
        adj.set(v, (adj.get(v) || new Set()).add(u));
    });
    let isLeaf = v => adj.get(v).size == 1;
    [...Array(N).keys()].forEach(v => isLeaf(v) ? q.push(v) : null);
    while (2 < N) {
        let k = q.length; N -= k;
        while (k--) {
            let u = q.shift();
            for (let v of adj.get(u)) {
                adj.get(v).delete(u);
                if (isLeaf(v))
                    q.push(v);
            }
        }
    }
    return q;
};
