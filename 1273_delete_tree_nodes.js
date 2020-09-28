/*
 * 1273. Delete Tree Nodes
 *
 * Q: https://leetcode.com/problems/delete-tree-nodes/
 * A: https://leetcode.com/problems/delete-tree-nodes/discuss/476958/Javascript-Python3-C%2B%2B-BFS-Prune-Leaves
 */

let deleteTreeNodes = (N, P, total, pruned = 0) => {
    let degree = Array(N).fill(0);
    for (let parent of P)
        ++degree[parent];
    let q = [];
    degree.forEach((x, i) => !x ? q.push(i) : null);
    let nodes = Array(N).fill(1);
    while (q.length) {
        let child = q.pop(),
            parent = P[child];
        if (!total[child]) {
            pruned += nodes[child];
        } else {
            nodes[parent] += nodes[child];
            total[parent] += total[child];
        }
        if (parent != -1 && !--degree[parent])
            q.push(parent);
    }
    return N - pruned;
};
