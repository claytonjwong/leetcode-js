/*
 * 121. Best Time to Buy and Sell Stock
 *
 * Q: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * A: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/507318/Javascript-and-C%2B%2B-solutions
 */

// monotonically decreasing stack
let maxProfit = (A, stack = [], max = 0) => {
    stack.back = () => stack[stack.length - 1];
    for (let x of A) {
        if (!stack.length || x < stack.back())
            stack.push(x);
        max = Math.max(max, x - stack.back());
    }
    return max;
};

// track minimum
let maxProfit = (A, min = Infinity, max = 0) => {
    for (let x of A) {
        min = Math.min(min, x);
        max = Math.max(max, x - min);
    }
    return max;
};
