/*
 * 297. Serialize and Deserialize Binary Tree
 *
 * Q: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * A: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/discuss/607219/Javascript-and-C%2B%2B-solutions
 */

let serialize = root => {
    let go = (root, A = []) => {
        if (root == null) {
            A.push('null');
        } else {
            A.push(root.val);
            A = go(root.left, A);
            A = go(root.right, A);
        }
        return A;
    };
    let A = go(root);
    return A.join(',');
};

let deserialize = s => {
    let A = s.split(',');
    let go = () => {
        let x = A.shift();
        if (x == 'null')
            return null;
        let root = new TreeNode(x);
        root.left = go();
        root.right = go();
        return root;
    };
    return go();
};