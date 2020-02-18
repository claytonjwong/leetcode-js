/*
 * 1337. The K Weakest Rows in a Matrix
 *
 * Q: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
 * A: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/discuss/513089/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
let kWeakestRows = (A, K) => {
    return A.map((row, i) => [row.reduce((a, b) => a + b), i]).sort((a, b) => a[0] - b[0]).map(row => row[1]).slice(0, K);
};
