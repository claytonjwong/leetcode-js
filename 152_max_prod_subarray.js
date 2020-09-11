/*
 * 152. Maximum Product Subarray
 *
 * Q: https://leetcode.com/problems/maximum-product-subarray/
 * A: https://leetcode.com/problems/maximum-product-subarray/discuss/48233/Javascript-Python3-C%2B%2B-MinMax-solutions
 */

let maxProduct = A => {
    let min = A[0],
        max = A[0],
        ans = A[0];
    for (let i = 1; i < A.length; ++i) {
        let next = [A[i], min * A[i], max * A[i]];
        [ min, max ] = [ Math.min(...next), Math.max(...next) ];
        ans = Math.max(ans, max);
    }
    return ans;
};
