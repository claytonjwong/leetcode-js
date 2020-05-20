/*
 * 901. Online Stock Span
 *
 * Q: https://leetcode.com/problems/online-stock-span/
 * A: https://leetcode.com/problems/online-stock-span/discuss/641213/Javascript-and-C%2B%2B-solutions
 */

// Brute-Force
class StockSpanner {
    constructor() {
        this.A = [];
    }
    next(price, A = this.A) {
        A.push(price);
        let i = A.length;
        while (0 <= i - 1 && A[i - 1] <= price) --i;
        return A.length - i; // total count <= new price 🎯
    }
}

// Reduce
class StockSpanner {
    constructor() {
        this.A = [];
    }
    next(price, A = this.A) {
        A.push([ price, 1 ]);
        for (let n = A.length - 1; 0 <= n - 1 && A[n - 1][0] <= A[n][0]; --n, A.pop()) {
            A[n - 1][0]  = A[n][0]; // overwrite lesser price with new price
            A[n - 1][1] += A[n][1]; // accumulate total count <= new price
        }
        return A[A.length - 1][1]; // total count <= new price 🎯
    }
}