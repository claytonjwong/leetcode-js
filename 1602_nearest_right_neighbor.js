/*
 * 1602. Find Nearest Right Node in Binary Tree
 *
 * Q: https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/
 * A: https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/discuss/875464/Javascript-Python3-C%2B%2B-DFS-and-BFS
 */

// DFS
let findNearestRightNode = (root, T, found = -1) => {
    let go = (node = root, depth = 0) => {
        if (!node)
            return null;
        if (depth == found)
            return node;
        if (node == T)
            found = depth;
        let L = go(node.left,  depth + 1),
            R = go(node.right, depth + 1);
        return L ? L : R ? R : null;
    };
    return go();
};

// BFS
let findNearestRightNode = (root, T) => {
    let q = [root];
    while (q.length) {
        let next = [];
        while (q.length) {
            let node = q.shift();
            if (node == T)
                return q.length ? q[0] : null;
            if (node.left)  next.push(node.left);
            if (node.right) next.push(node.right);
        }
        [q, next] = [next, q];
    }
    return null;
};
