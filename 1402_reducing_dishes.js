/*
 * 1402. Reducing Dishes
 *
 * Q: https://leetcode.com/problems/reducing-dishes/
 * A: https://leetcode.com/problems/reducing-dishes/discuss/574182/Javascript-and-C%2B%2B-solutions
 */

let maxSatisfaction = (A, max = 0) => {
    A.sort((a, b) => b - a);
    for (let j = 1; j <= A.length; ++j) {
        let next = 0;
        for (let i = 0, k = j; i < j; ++i, --k)
            next += A[i] * k;
        max = Math.max(max, next);
    }
    return max;
};