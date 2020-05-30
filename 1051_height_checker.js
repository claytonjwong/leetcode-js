/*
 * 1051. Height Checker
 *
 * Q: https://leetcode.com/problems/height-checker/
 * A: https://leetcode.com/problems/height-checker/discuss/603571/Javascript-and-C%2B%2B-solutions
 */

// concise
let heightChecker = A => [...A].sort((a, b) => a - b).filter((x, i) => x != A[i]).length;

// verbose
let heightChecker = (A, diff = 0) => {
    let B = [...A].sort((a, b) => a - b);
    for (let i = 0; i < A.length; ++i)
        diff += A[i] != B[i];
    return diff;
};