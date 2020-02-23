/*
 * 1361. Validate Binary Tree Nodes
 *
 * Q: https://leetcode.com/problems/validate-binary-tree-nodes/
 * A: https://leetcode.com/problems/validate-binary-tree-nodes/discuss/517576/Javascript-and-C%2B%2B-solutions
 */

let validateBinaryTreeNodes = (N, L, R, q = [0], seen = new Set([0])) => {
    while (q.length > 0) {
        let cur = q[0]; q.shift();
        let l = L[cur],
            r = R[cur];
        if ((l > -1 && seen.has(l)) || (r > -1 && seen.has(r)))
            return false;
        if (l > -1) q.push(l), seen.add(l);
        if (r > -1) q.push(r), seen.add(r);
    }
    return seen.size == N;
};

