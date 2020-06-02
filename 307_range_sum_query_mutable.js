/*
 * 307. Range Sum Query - Mutable
 *
 * Q: https://leetcode.com/problems/range-sum-query-mutable/
 * A: https://leetcode.com/problems/range-sum-query-mutable/discuss/665390/Javascript-and-C%2B%2B-solutions
 */

// naive
class NumArray {
    constructor(A) {
        this.A = A;
    }
    update(i, val) {
        this.A[i] = val;
    }
    sumRange(i, j, sum = 0) {
        while (i <= j)
            sum += this.A[i++];
        return sum;
    }
}

// prefix sums
class NumArray {
    constructor(A) {
        this.A = A;
        this.dp = Array(A.length + 1);
        this._prefixSums();
    }
    update(i, val, A = this.A) {
        A[i] = val;
        this._prefixSums(i);
    }
    sumRange(i, j, dp = this.dp) {
        return dp[j + 1] - dp[i];
    }
    _prefixSums(start = 0, A = this.A, dp = this.dp) {
        if (!start)
            dp[0] = 0;
        for (let i = start + 1; i < dp.length; ++i) dp[i] = A[i - 1] + dp[i - 1];
    }
}