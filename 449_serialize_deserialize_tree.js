/*
 * 449. Serialize and Deserialize BST
 *
 * Q: https://leetcode.com/problems/serialize-and-deserialize-bst/
 * A: https://leetcode.com/problems/serialize-and-deserialize-bst/discuss/93191/Javascript-Python3-C%2B%2B-Recursive-Pre-Order-Traversal
 */

let serialize = (root, q = []) => {
    let go = root => {
        if (!root) {
            q.push(-1);
            return;
        }
        q.push(root.val);
        go(root.left);
        go(root.right);
    };
    go(root);
    return q.join(' ');
};
let deserialize = (data, q = data.split(' ')) => {
    let go = () => {
        if (!q.length)
            return;
        let x = q.shift();
        let root = -1 < x ? new TreeNode(x) : null;
        if (root) root.left  = go();
        if (root) root.right = go();
        return root;
    };
    return go();
};
