/*
 * 103. Binary Tree Zigzag Level Order Traversal
 *
 * Q: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * A: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/discuss/749264/Javascript-Python3-C%2B%2B-BFS-per-Level
 */

let zigzagLevelOrder = (root, rev = 0, ans = []) => {
    let q = root ? [ root ] : [];
    while (q.length) {
        ans.push([...q].map(node => node.val));
        if (rev)
            ans[ans.length - 1].reverse();
        let k = q.length;
        while (k--) {
            let cur = q.shift();
            if (cur.left)  q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
        rev ^= 1;
    }
    return ans;
};
