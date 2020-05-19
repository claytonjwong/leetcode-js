/*
 * 1448. Count Good Nodes in Binary Tree
 *
 * Q: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * A: https://leetcode.com/problems/count-good-nodes-in-binary-tree/discuss/639804/Javascript-and-C%2B%2B-solutions
 */

// concise
let goodNodes = (root, max = -Infinity, f = Math.max) => !root ? 0 : Number(root.val >= max)
	+ goodNodes(root.left, f(root.val, max))
	+ goodNodes(root.right, f(root.val, max));

// verbose
let goodNodes = (root, path = [], max = [], cnt = 0, bad = 0) => {
    let go = root => {
        ++cnt;
        if (max.length && max[max.length - 1] > root.val)
            ++bad;
        path.push(root.val);
        if (!max.length || root.val >= max[max.length - 1])
            max.push(root.val);
        if (root.left) go(root.left);
        if (root.right) go(root.right);
        if (max.length && max[max.length - 1] == path[path.length - 1])
            max.pop();
        path.pop();
    };
    go(root);
    return cnt - bad;
};