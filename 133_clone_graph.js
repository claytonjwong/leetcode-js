/*
 * 133. Clone Graph
 *
 * Q: https://leetcode.com/problems/clone-graph/
 * A: https://leetcode.com/problems/clone-graph/discuss/613748/Javascript-and-C%2B%2B-solutions
 */

// concise
let cloneGraph = (node, m = {}) => {
    if (!node)
        return null;
    if (m[node.val])
        return m[node.val];
    m[node.val] = new Node(node.val);
    for (let nei of node.neighbors)
        m[node.val].neighbors.push(cloneGraph(nei, m));
    return m[node.val];
};

// verbose
let cloneGraph = (node, seen = new Map()) => {
    let go = node => {
        if (seen.has(node.val))
            return seen.get(node.val);
        let copy = new Node(node.val);
        seen.set(node.val, copy);
        for (let nei of node.neighbors)
            copy.neighbors.push(go(nei));
        return copy;
    };
    return node ? go(node) : null;
};