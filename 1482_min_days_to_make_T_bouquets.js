/*
 * 1482. Minimum Number of Days to Make m Bouquets
 *
 * Q: https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
 * A: https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/discuss/700480/Javascript-and-C%2B%2B-solutions
 */

let minDays = (A, T, K, INF = 1e9 + 1) => {
    let ok = (today, adj = 0, cnt = 0) => {
        for (let day of A) {
            adj = day <= today ? adj + 1 : 0;
            if (adj == K)
                adj = 0, ++cnt;
        }
        return T <= cnt; // target T bouquets 🎯
    };
    let i = 0,
        j = INF;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (!ok(k))
            i = k + 1;
        else
            j = k;
    }
    return i < INF ? i : -1;
};