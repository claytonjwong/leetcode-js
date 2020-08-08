/*
 * 1539. Kth Missing Positive Number
 *
 * Q: https://leetcode.com/problems/kth-missing-positive-number/
 * A: https://leetcode.com/problems/kth-missing-positive-number/discuss/780016/Javascript-Python3-C%2B%2B-solutions
 */

let findKthPositive = (A, K) => {
    let seen = new Set(A);
    for (let i = 1;; ++i)
        if (!seen.has(i) && !--K)
            return i;
};
