/*
 * 55. Jump Game
 *
 * Q: https://leetcode.com/problems/jump-game/
 * A: https://leetcode.com/problems/jump-game/discuss/143388/2-liner-C%2B%2B-(-EASY-to-understand-)-via-iterative-refactoring
 */

let canJump = (A, max = 0) => {
    let N = A.length,
        T = N - 1; // target 🎯
    for (let i = 0; i < N && i <= max; ++i)
        max = Math.max(max, i + A[i]);
    return T <= max;
};