/*
 * 338. Counting Bits
 *
 * Q: https://leetcode.com/problems/counting-bits/
 * A: https://leetcode.com/problems/counting-bits/discuss/657068/Kt-Js-Py3-Cpp-Dynamic-Programming
 */

let countBits = N => {
    let ans = [ 0 ];
    for (let i = 1; i <= N; ++i)
        ans.push(ans[i >> 1] + (i & 1));
    return ans;
};
