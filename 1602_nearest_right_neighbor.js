/*
 * 1602. Find Nearest Right Node in Binary Tree
 *
 * Q: https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/
 * A: https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/discuss/875464/Javascript-Python3-C%2B%2B-BFS-solutions
 */

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
