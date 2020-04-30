/*
 * 1089. Duplicate Zeros
 *
 * Q: https://leetcode.com/problems/duplicate-zeros/
 * A: https://leetcode.com/problems/duplicate-zeros/discuss/603769/Javascript-and-C%2B%2B-solutions
 */

let duplicateZeros = (A, q = []) => {
    A.forEach((_, i) => {
        if (A[i] == 0)
            q.push(0, 0);
        else
            q.push(A[i]);
        A[i] = q.shift();
    });
};