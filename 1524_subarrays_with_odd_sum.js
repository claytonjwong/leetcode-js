/*
 * 1524. Number of Sub-arrays With Odd Sum
 *
 * Q: https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/
 * A: https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/discuss/754751/Javascript-Python3-C%2B%2B-count-of-evenodd-sums
 */
let numOfSubarrays = (A, sum = 0, cnt = [1, 0]) => {
    for (let i = 0; i < A.length; ++i)
        ++cnt[(sum += A[i]) % 2]
    return (cnt[0] * cnt[1]) % (1e9 + 7);
};
