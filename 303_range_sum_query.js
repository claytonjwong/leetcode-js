/*
 * 303. Range Sum Query - Immutable
 * 
 * Q: https://leetcode.com/problems/range-sum-query-immutable/
 * A: https://leetcode.com/problems/range-sum-query-immutable/discuss/474670/Javascript-and-C%2B%2B-solutions
 */

class NumArray {
    constructor(A) {
        let N = A.length;
        this.S = new Array(N + 1);
        this.S[0] = 0;
        for (let i = 1; i <= N; ++i)
            this.S[i] = this.S[i - 1] + A[i - 1];
    }
    sumRange(i, j) {
        return this.S[j + 1] - this.S[i];
    }
}