/*
 * 1578. Minimum Deletion Cost to Avoid Repeating Letters
 *
 * Q: https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/
 * A: https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/discuss/836954/Javascript-Python3-C%2B%2B-Greedy
 */

let minCost = (S, cost, total = 0) => {
    let N = S.length,
        i = 0;
    while (i < N) {
        let j = i;
        let run = cost[j],
            max = cost[j];
        while (j + 1 < N && S[j] == S[j + 1]) {  // 🚌 accumulate current "run" cost and track the maximum cost
            ++j;
            run += cost[j];
            max = Math.max(max, cost[j]);
        }
        total += run - max;                      // 🎯 greedily consume K - 1 minimal values for each "run" of length K if 1 < K
        i = j + 1;
    }
    return total;
};
