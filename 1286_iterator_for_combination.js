/*
 * 1286. Iterator for Combination
 *
 * Q: https://leetcode.com/problems/iterator-for-combination/
 * A: https://leetcode.com/problems/iterator-for-combination/discuss/789522/Javascript-Python3-C%2B%2B-Recursive-DFS-%2B-BT
 */

class CombinationIterator {
    constructor(A, K) {
        this.A = A;
        this.K = K;
        this.i = 0;
        this.combos = [];
        this.go();
    }
    go(i = 0, path = [], A = this.A, K = this.K) {
        if (path.length == K) {
            this.combos.push([...path]);
            return;
        }
        if (i == A.length)
            return;
        this.go(i + 1, path.concat(A[i])); // ✅ with A[i]
        this.go(i + 1, path);              // 🚫 without A[i]
    }
    next() {
        return this.combos[this.i++].join('');
    }
    hasNext() {
        return this.i < this.combos.length;
    }
}
