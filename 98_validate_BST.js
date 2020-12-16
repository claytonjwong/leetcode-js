/*
 * 98. Validate Binary Search Tree
 *
 * Q: https://leetcode.com/problems/validate-binary-search-tree/
 * A: https://leetcode.com/problems/validate-binary-search-tree/discuss/116826/Kt-Js-Py3-Cpp-Recursive
 */

let isValidBST = (root, lo = -Infinity, hi = Infinity) => {
    if (!root)
        return true;
    if (root.val <= lo || hi <= root.val)
        return false;
    return isValidBST(root.left, lo, root.val) && isValidBST(root.right, root.val, hi);
};
