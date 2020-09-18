/*
 * 1586. Binary Search Tree Iterator II
 *
 * Q: https://leetcode.com/problems/binary-search-tree-iterator-ii/
 * A: https://leetcode.com/problems/binary-search-tree-iterator-ii/discuss/852792/Javascript-Python3-C%2B%2B-Naive-solutions
 */

class BSTIterator {
    constructor(root) {
        this.A = [];
        this.i = -1;
        let go = root => {
            if (!root)
                return;
            go(root.left);
            this.A.push(root.val);
            go(root.right);
        };
        go(root);
    }

    hasPrev = () => 0 < this.i;
    hasNext = () => this.i + 1 < this.A.length;

    prev = () => this.A[--this.i];
    next = () => this.A[++this.i];
}
