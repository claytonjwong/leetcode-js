/*
 * Rank            Name             Score    Finish Time    Q1 (3)     Q2 (4)     Q3 (6)    Q4 (7)
 * 2885 / 15080    claytonjwong     7        0:22:12        0:14:46    0:22:12
 */

/*
 * 1560. Most Visited Sector in a Circular Track
 *
 * Q: https://leetcode.com/problems/most-visited-sector-in-a-circular-track/
 * A: https://leetcode.com/problems/most-visited-sector-in-a-circular-track/discuss/806721/Javascript-Python3-C%2B%2B-Brute-Force-Count
 */
let mostVisited = (N, A) => {
    A = A.map(j => j - 1);  // 💎 -1 for 0-based indexing
    let cnt = Array(N).fill(0);
    let i = A[0];
    cnt[i] = 1;
    for (let j of A)
        while (i != j)
            ++cnt[i = i + 1 < N ? i + 1 : 0];  // ⭐️ i wraps-around at N
    let max = Math.max(...cnt);
    return cnt.map((n, i) => n == max ? i + 1 : Infinity).filter(i => i != Infinity);  // 💎 +1 for 1-based indexing
};

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
