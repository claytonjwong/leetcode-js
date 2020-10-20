/*
 * 133. Clone Graph
 *
 * Q: https://leetcode.com/problems/clone-graph/
 * A: https://leetcode.com/problems/clone-graph/discuss/613748/Kt-Js-Py3-Cpp-DFS-%2B-BFS-via-Map
 */

// DFS
let cloneGraph = (cur, m = {}) => {
    if (!cur)
        return null;
    if (m[cur.val])
        return m[cur.val];
    m[cur.val] = new Node(cur.val);
    for (let adj of cur.neighbors)
        m[cur.val].neighbors.push(cloneGraph(adj, m));
    return m[cur.val];
};

// BFS
let cloneGraph = (start, m = {}) => {
    if (!start)
        return null;
    let q = [ start ],
        seen = new Set([ start.val ]);
    while (q.length) {
        let cur = q.shift();
        m[cur.val] = m[cur.val] ? m[cur.val] : new Node(cur.val);
        for (let adj of cur.neighbors) {
            m[adj.val] = m[adj.val] ? m[adj.val] : new Node(adj.val);
            m[cur.val].neighbors.push(m[adj.val]);
            if (!seen.has(adj.val))
                q.push(adj),
                seen.add(adj.val);
        }
    }
    return m[start.val];
};
