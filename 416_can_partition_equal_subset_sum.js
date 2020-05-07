/*
 * 416. Partition Equal Subset Sum
 *
 * Q: https://leetcode.com/problems/partition-equal-subset-sum/
 * A: https://leetcode.com/problems/partition-equal-subset-sum/discuss/617275/Javascript-and-C%2B%2B-solutions
 */

// top-down
let canPartition = (A, seen = new Set()) => {
    let go = (T = Math.floor(total / 2), i = 0) => {
        if (T < 0 || seen.has(`${T},${i}`))
            return false;
        seen.add(`${T},${i}`);
        if (i == A.length)
            return T == 0; // target 🎯
        return go(T - A[i], i + 1) || go(T, i + 1); // with xor without
    }
    let total = A.reduce((a, b) => a + b);
    return total % 2 ? false : go();
};

// bottom-up
let canPartition = A => {
    let total = A.reduce((a, b) => a + b);
    if (total % 2)
        return false;
    let T = Math.floor(total / 2); // target 🎯
    let dp = Array(T + 1).fill(0);
    dp[0] = 1;
    for (let x of A)
        for (let sum = T; sum >= x; --sum) // potential sums to reach
            if (dp[sum - x]) // if we can reach sum without x
                dp[sum] = 1; // then we can reach sum with x
    return dp[T]; // reached target sum? 🎯
};