/*
 * 1570. Dot Product of Two Sparse Vectors
 *
 * Q: https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
 * A: https://leetcode.com/problems/dot-product-of-two-sparse-vectors/discuss/826785/Javascript-Python3-C%2B%2B-Zip-solutions
 */

class SparseVector {
    constructor(A) { this.A = A; }
    dotProduct = other => _.sum(_.zip(this.A, other.A).map(([a, b]) => a * b));
}
