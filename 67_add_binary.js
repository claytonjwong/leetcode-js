/*
 * 67. Add Binary
 *
 * Q: https://leetcode.com/problems/add-binary/
 * A: https://leetcode.com/problems/add-binary/discuss/744220/Javascript-Python3-C%2B%2B-accumulate-sum-a%2Bb%2Bc-in-reverse
 */

let addBinary = (A, B, c = 0, ans = []) => { // ⭐️ c is the carry
    let M = A.length,
        N = B.length;
    for (let i = M - 1, j = N - 1; 0 <= i || 0 <= j; --i, --j) {
        let a = 0 <= i ? Number(A[i]) : 0,
            b = 0 <= j ? Number(B[j]) : 0;
        ans.push((a + b + c) % 2);
        c = 1 < a + b + c;
    }
    if (c)
        ans.push(1);
    return ans.reverse().join('');
};
