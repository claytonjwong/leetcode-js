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
