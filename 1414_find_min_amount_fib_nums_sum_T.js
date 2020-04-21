/*
 * 1414. Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
 *
 * Q: https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
 * A: https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/discuss/589359/Javascript-and-C%2B%2B-solutions
 */

let findMinFibonacciNumbers = (T, A = [0, 1], cnt = 0) => {
    while (A[A.length - 2] + A[A.length - 1] <= T)
        A.push(A[A.length - 2] + A[A.length - 1]);
    for (let i = A.length - 1; i > 0 && T > 0; --i)
        if (T >= A[i])
            T -= A[i], ++cnt;
    return cnt;
};