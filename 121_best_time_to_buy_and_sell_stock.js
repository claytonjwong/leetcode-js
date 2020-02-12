/*
 * 121. Best Time to Buy and Sell Stock
 *
 * Q: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * A: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/507318/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

let maxProfit = (A, ans = 0) => {
    let low = A.length > 0 ? A[0] : -1;
    for (let x of A)
        ans = Math.max(ans, x - low),
        low = Math.min(low, x);
    return ans;
};