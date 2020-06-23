/*
 * 1485. Clone Binary Tree With Random Pointer
 *
 * Q: https://leetcode.com/problems/clone-binary-tree-with-random-pointer/
 * A: https://leetcode.com/problems/clone-binary-tree-with-random-pointer/discuss/700881/Javascript-and-C%2B%2B-solutions
 */

let copyRandomBinaryTree = root => {
    let go = root => {
        if (!root)
            return null;
        let copy = new NodeCopy(root.val, null, null, root.random);
        copy.left = go(root.left);
        copy.right = go(root.right);
        root.copy = copy;
        return copy;
    };
    let fix = root => {
        if (!root)
            return null;
        if (root.random)
            root.random = root.random.copy;
        fix(root.left);
        fix(root.right);
        return root;
    };
    return fix(go(root));
};
