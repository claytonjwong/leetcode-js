/*
 * 133. Clone Graph
 *
 * Q: https://leetcode.com/problems/clone-graph/
 * A: https://leetcode.com/problems/clone-graph/discuss/613748/Javascript-and-C%2B%2B-solutions
 */

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