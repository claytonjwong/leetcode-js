/*
 * 70. Climbing Stairs
 *
 * Q: https://leetcode.com/problems/climbing-stairs/
 * A: https://leetcode.com/problems/climbing-stairs/discuss/765266/Javascript-Python3-C%2B%2B-fib-O(1)-mem-with-a-b-c
 */

let climbStairs = (N, a = 0, b = 1, c = 1) => {
    while (N--)
        c = a + b, a = b, b = c;
    return c;
};
