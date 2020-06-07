/*
 * 1470. Shuffle the Array
 *
 * Q: https://leetcode.com/problems/shuffle-the-array/
 * A: https://leetcode.com/problems/shuffle-the-array/discuss/674389/Javascript-and-C%2B%2B-solutions
 */
// concise
let shuffle = (A, K, j = 0) => A.map((_, i) => !(i % 2) ? A[j++] : A[j + K - 1]);
// verbose
let shuffle = (A, K, ans = []) => {
    for (let i = 0; i < K; ++i)
        ans.push(A[i], A[i + K]);
    return ans;
};