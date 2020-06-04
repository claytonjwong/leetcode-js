/*
 * 509. Fibonacci Number
 *
 * Q: https://leetcode.com/problems/fibonacci-number/
 * A: https://leetcode.com/problems/fibonacci-number/discuss/595781/Javascript-and-C%2B%2B-solutions
 */

// top-down
let fib = N => N < 2 ? N : fib(N - 1) + fib(N - 2);

// bottom-up
let fib = (N, a = 0, b = 1, c = 1) => {
    if (N < 2)
        return N;
    for (; --N; c = a + b, a = b, b = c);
    return c;
}