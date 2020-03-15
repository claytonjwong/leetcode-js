/*
 * 1380. Lucky Numbers in a Matrix
 *
 * Q: https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 * A: https://leetcode.com/problems/lucky-numbers-in-a-matrix/discuss/539707/Javascript-and-C%2B%2B-solutions
 */
let luckyNumbers  = (A, ans = []) => {
    let M = A.length,
        N = A[0].length;
    let min = Array(M).fill(Infinity);
    let max = Array(N).fill(-Infinity);
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            min[i] = Math.min(min[i], A[i][j]),
            max[j] = Math.max(max[j], A[i][j]);
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (min[i] == max[j]) // 🍀 lucky number 🍀
                ans.push(A[i][j]);
    return ans;
};