/*
 * 1561. Maximum Number of Coins You Can Get
 *
 * Q: https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
 * A: https://leetcode.com/problems/maximum-number-of-coins-you-can-get/discuss/806726/Javascript-Python3-C%2B%2B-Greedy-solutions
 */

let maxCoins = (A, ans = 0) => {
    A.sort((a, b) => a - b);
    let N = A.length,
        K = N / 3,
        i = N - 2;
    while (K--)
        ans += A[i], i -= 2;
    return ans;
};
