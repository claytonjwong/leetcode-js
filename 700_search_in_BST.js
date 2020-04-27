/*
 * 700. Search in a Binary Search Tree
 *
 * Q: https://leetcode.com/problems/search-in-a-binary-search-tree/
 * A: https://leetcode.com/problems/search-in-a-binary-search-tree/discuss/600141/Javascript-and-C%2B%2B-solutions
 */

let searchBST = (root, T) => {
    while (root && root.val != T) {
        if (root.val > T)
            root = root.left;
        else
            root = root.right;
    }
    return root;
};