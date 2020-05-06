/*
 * 109. Convert Sorted List to Binary Search Tree
 *
 * Q: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 * A: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/discuss/615013/Javascript-and-C%2B%2B-solutions
 */

let sortedListToBST = (head, A = []) => {
    while (head)
        A.push(head.val), head = head.next;
    let go = (i, j) => {
        if (i == j)
            return null;
        let k = Math.floor((i + j) / 2);
        let root = new TreeNode(A[k]);
        root.left = go(i, k);
        root.right = go(k + 1, j);
        return root;
    }
    return go(0, A.length);
};