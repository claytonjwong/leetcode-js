/*
 * 111. Minimum Depth of Binary Tree
 *
 * Q: https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * A: https://leetcode.com/problems/minimum-depth-of-binary-tree/discuss/553010/Kt-Js-Py3-Cpp-DFS-%2B-BFS
 */

// DFS
let minDepth = root => {
    let go = (root, depth = 1) => {
        if (!root.left && !root.right)
            return depth;
        let L = root.left  ? go(root.left,  depth + 1) : Infinity,
            R = root.right ? go(root.right, depth + 1) : Infinity;
        return Math.min(L, R);
    };
    return root ? go(root) : 0;
};

// BFS
let minDepth = (root, depth = 1) => {
    if (!root)
        return 0;
    let q = [ root ];
    while (q.length) {
        let k = q.length;
        while (k--) {
            let cur = q.shift();
            if (!cur.left && !cur.right)
                return depth;
            if (cur.left)  q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
        ++depth;
    }
    return -1;
};
