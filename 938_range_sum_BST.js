/*
 * 938. Range Sum of BST
 *
 * Q: https://leetcode.com/problems/range-sum-of-bst/
 * A: https://leetcode.com/problems/range-sum-of-bst/discuss/192070/Kt-Js-Py3-Cpp-solutions
 */

let rangeSumBST = (root, lo, hi) => {
    if (!root)
        return 0;
    let x = lo <= root.val && root.val <= hi ? root.val : 0;
    return x + rangeSumBST(root.left, lo, hi) + rangeSumBST(root.right, lo, hi);
};
