/*
 * 1518. Water Bottles
 *
 * Q: https://leetcode.com/problems/water-bottles/
 * A: https://leetcode.com/problems/water-bottles/discuss/743230/Javascript-Python3-C%2B%2B-1-Liners
 */

// top-down concise
let numWaterBottles = (n, k) => n < k ? n : k + numWaterBottles(n - k + 1, k);

// top-down verbose
let numWaterBottles = (n, k) => {
    // 🛑 base case: drink all n bottles and 🚫 cannot exchange enough empty bottles for another drink
    if (n < k)
        return n;
    // 🚀 recursive case: drink k bottles at a time and ✅ exchange those k empty bottles for +1 more drink 🍺
    return k + numWaterBottles(n - k + 1, k);
};

// bottom-up
let numWaterBottles = (n, k, d = 0) => {
    while (k <= n)
        d = d + k,     // 🚀 drink k bottles at a time
        n = n - k + 1; // ✅ exchange k empty bottles for +1 more drink 🍺
    return d + n;      // 🛑 drink remaining n bottles and 🚫 cannot exchange enough empty bottles for another drink
};
