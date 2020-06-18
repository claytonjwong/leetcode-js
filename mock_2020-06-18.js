/*
 * Microsoft- Phone Interview
 * Completed June 18, 2020 11:28 AM
 * 100%
 * Your interview score of 9.85/10 beats 100% of all users.
 * Time Spent: 4 minutes 11 seconds
 * Time Allotted: 1 hour 30 minutes
 */

/*
 * 108. Convert Sorted Array to Binary Search Tree
 *
 * Q: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * A: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/discuss/694149/Javascript-and-C%2B%2B-solutions
 */
let sortedArrayToBST = A => {
    let N = A.length;
    let go = (i = 0, j = N - 1) => {
        if (j < i)
            return null;
        let k = Math.floor((i + j) / 2);
        let root = new TreeNode(A[k]);
        root.left = go(i, k - 1);
        root.right = go(k + 1, j);
        return root;
    };
    return go();
};

/*
 * 28. Implement strStr()
 *
 * Q: https://leetcode.com/problems/implement-strstr/
 * A: https://leetcode.com/problems/implement-strstr/discuss/694155/Javascript-and-C%2B%2B-solutions
 */
let strStr = (haystack, needle) => haystack.indexOf(needle);