/*
 * 1310. XOR Queries of a Subarray
 *
 * Q: https://leetcode.com/problems/xor-queries-of-a-subarray/
 * A: https://leetcode.com/problems/xor-queries-of-a-subarray/discuss/475371/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
let xorQueries = (A, queries) => {
    let N = A.length, X = new Array(N + 1).fill(0), ans = [];
    for (let i = 1; i <= N; ++i)
        X[i] = X[i - 1] ^ A[i - 1];
    for (let [i, j] of queries)
        ans.push(X[i] ^ X[j + 1]);
    return ans;
};
console.log(xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]]));
console.log(xorQueries([4,8,2,10], [[2,3],[1,3],[0,0],[0,3]]));
