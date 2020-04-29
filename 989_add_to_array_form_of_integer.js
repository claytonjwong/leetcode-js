/*
 * 989. Add to Array-Form of Integer
 *
 * Q: https://leetcode.com/problems/add-to-array-form-of-integer/
 * A: https://leetcode.com/problems/add-to-array-form-of-integer/discuss/602275/Javascript-and-C%2B%2B-solutions
 */

let addToArrayForm = (A, K, carry = 0) => {
    A.reverse();
    for (let i = 0; K || i < A.length; ++i) {
        if (i == A.length)
            A.push(0);
        A[i] += (K % 10) + carry;
        carry = Number(A[i] >= 10);
        A[i] %= 10;
        K = Math.floor(K / 10);
    }
    if (carry)
        A.push(carry);
    return A.reverse();
};