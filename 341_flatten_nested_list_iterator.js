/*
 * 341. Flatten Nested List Iterator
 *
 * Q: https://leetcode.com/problems/flatten-nested-list-iterator/
 * A: https://leetcode.com/problems/flatten-nested-list-iterator/discuss/582851/Javascript-and-C%2B%2B-solutions
 */

class NestedIterator {
    constructor(A) {
        this.q = [];
        let go = A => {
            for (let x of A)
                if (x.isInteger())
                    this.q.push(x.getInteger());
                else
                    go(x.getList());
        };
        go(A);
    }
    next() {
        return this.q.shift();
    }
    hasNext() {
        return this.q.length;
    }
}