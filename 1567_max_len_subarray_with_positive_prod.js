/*
 * 1567. Maximum Length of Subarray With Positive Product
 *
 * Q: https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/
 * A: https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/discuss/822464/Javascript-Python3-C%2B%2B-Sliding-Window
 */

let getMaxLen = (A, cnt = 0, max = 0) => {
    A.push(0);  // ⭐️ sentinel value
    let N = A.length,
        i = 0,
        j = 0;
    while (i != N) {
        // case 1: ➖ collapse window [i 👉 ..j)
        while (j < N && !A[j]) {
            while (i < j) {
                cnt = A[i++] < 0 ? cnt - 1 : cnt;
                max = cnt & 1 ? max : Math.max(max, j - i);
            }
            i = ++j;
        }
        // case 2: ➕ expand window [i..j 👉 )
        while (j < N && A[j]) {
            cnt = A[j++] < 0 ? cnt + 1 : cnt;
            max = cnt & 1 ? max : Math.max(max, j - i);
        }
    }
    return max;
};
