/*
 * 545. Boundary of Binary Tree
 *
 * Q: https://leetcode.com/problems/boundary-of-binary-tree/
 * A: https://leetcode.com/problems/boundary-of-binary-tree/discuss/583973/Javascript-and-C%2B%2B-solutions
 */

let boundaryOfBinaryTree = (root, ans = []) => {
    if (!root)
        return ans;
    let goLeft = root => {
        if (!root.left && !root.right)
            return;
        ans.push(root.val); // push in fowards order
        if (root.left) goLeft(root.left)
        else
        if (root.right) goLeft(root.right);
    };
    let goRight = root => {
        if (!root.left && !root.right)
            return;
        if (root.right) goRight(root.right);
        else
        if (root.left) goRight(root.left);
        ans.push(root.val); // push in reverse order
    };
    let goLeaf = root => {
        if (!root.left && !root.right) {
            ans.push(root.val);
            return;
        }
        if (root.left) goLeaf(root.left);
        if (root.right) goLeaf(root.right);
    };
    ans.push(root.val);
    if (root.left)
        goLeft(root.left),
        goLeaf(root.left);
    if (root.right)
        goLeaf(root.right),
        goRight(root.right);
    return ans;
};