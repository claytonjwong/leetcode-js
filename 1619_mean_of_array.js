/*
 * 1619. Mean of Array After Removing Some Elements
 *
 * Q: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
 * A: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/discuss/898684/Kt-Js-Py3-Cpp-Sort-Trim-Average
 */

// with lodash
let trimMean = A => {
    let N = A.length,
        K = Math.floor(N / 20);
    return _.sum(_.sortBy(A).slice(K, N - K)) / (N - 2 * K);
};

// without lodash
let trimMean = A => {
    let N = A.length,
        K = Math.floor(N / 20);
    return A.sort((a, b) => a - b).slice(K, N - K).reduce((a, b) => a + b) / (N - 2 * K);
}
