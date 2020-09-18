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
    hasNext() {
        return this.i + 1 < this.A.length;
    }
    next() {
        return this.A[++this.i];
    }
    hasPrev() {
        return 0 < this.i;
    }
    prev() {
        return this.A[--this.i];
    }
}
