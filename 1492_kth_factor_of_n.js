/*
 * 1492. The kth Factor of n
 *
 * Q: https://leetcode.com/problems/the-kth-factor-of-n/
 * A: https://leetcode.com/problems/the-kth-factor-of-n/discuss/708074/Javascript-and-C%2B%2B-solutions
 */

let kthFactor = (N, K) => {
    for (let i = 1; i <= N / 2; ++i)
        if (!(N % i) && !--K)
            return i;
    return -1;
};
