/*
 * 122. Best Time to Buy and Sell Stock II
 *
 * Q: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * A: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/discuss/565175/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} prices
 * @return {number}
 */

// let maxProfit = (A, profit = 0) => {
//     let N = A.length;
//     for (let i = 0, j = 0; i < N; i = j + 1) {
//         while (i < N - 1 && A[i] > A[i + 1]) ++i; // valley 👇
//         j = i;
//         while (j < N - 1 && A[j] < A[j + 1]) ++j; // peak 👆
//         profit += Math.max(0, A[j] - A[i]);
//     }
//     return profit;
// };

let maxProfit = (A, profit = 0) => {
    for (let i = 1; i < A.length; ++i)
        profit += Math.max(0, A[i] - A[i - 1]); // only count positive hillside steps 👆
    return profit;
};