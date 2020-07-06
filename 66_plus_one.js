/*
 * 66. Plus One
 *
 * Q: https://leetcode.com/problems/plus-one/
 * A: https://leetcode.com/problems/plus-one/discuss/722700/Javascript-and-C%2B%2B-solutions
 */

let plusOne = (A, carry = 0) => {
    let N = A.length,
        i = N - 1;
    do {
        if (10 == A[i] + 1)
            carry = 1, A[i] = 0;
        else
            carry = 0, A[i] = A[i] + 1;
    } while (carry && 0 <= --i);
    if (carry)
        A.unshift(1);
    return A;
};
