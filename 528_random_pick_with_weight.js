/*
 * 528. Random Pick with Weight
 *
 * Q: https://leetcode.com/problems/random-pick-with-weight/
 * A: https://leetcode.com/problems/random-pick-with-weight/discuss/671868/Missing-Consideration
 */

// naive
class Solution {
    constructor(weights) {
        this.A = [];
        weights.forEach((w, i) => this.A.push(...`${i}`.repeat(w).split('')));
    }
    pickIndex(A = this.A) {
        return A[Math.floor(Math.random() * A.length)];
    }
}

// prefix sums "encoding" with linear search "decoding"
class Solution {
    constructor(weights) {
        this.A = [];
        let A = this.A;
        weights.forEach(w => A.push(w + (A.length ? A[A.length - 1] : 0))); // prefix sums
    }
    pickIndex(A = this.A) {
        let t = Math.random() * A[A.length - 1];
        for (let i = 0; i < A.length; ++i)
            if (t < A[i])
                return i;
        return A[A.length - 1];
    }
}

// prefix sums "encoding" with binary search "decoding"
class Solution {
    constructor(weights) {
        this.A = [];
        let A = this.A;
        weights.forEach(w => A.push(w + (A.length ? A[A.length - 1] : 0))); // prefix sums
    }
    pickIndex(A = this.A) {
        let t = Math.random() * A[A.length - 1];
        let i = 0, j = A.length - 1;
        while (i < j) {
            let k = Math.floor((i + j) / 2);
            if (A[k] <= t)
                i = k + 1;
            else
                j = k;
        }
        return i;
    }
}