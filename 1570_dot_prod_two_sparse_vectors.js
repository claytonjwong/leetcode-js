/*
 * 1570. Dot Product of Two Sparse Vectors
 *
 * Q: https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
 * A: https://leetcode.com/problems/dot-product-of-two-sparse-vectors/discuss/826785/Javascript-Python3-C%2B%2B-Zip-%2B-Map-solutions
 */

// naive solution
class SparseVector {
    constructor(A) { this.A = A; }
    dotProduct = other => _.sum(_.zip(this.A, other.A).map(([a, b]) => a * b));
}

// optimized solution
class SparseVector {
    constructor(A) {
        this.m = new Map();
        A.forEach((x, i) => x ? this.m.set(i, x) : null);
    }
    dotProduct = other => _.sum([...this.m.entries()].map(([i, x]) => x * (other.m.get(i) || 0)));
}
