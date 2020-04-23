/*
 * 201. Bitwise AND of Numbers Range
 *
 * Q: https://leetcode.com/problems/bitwise-and-of-numbers-range/
 * A: https://leetcode.com/problems/bitwise-and-of-numbers-range/discuss/593850/Javascript-and-C%2B%2B-solutions
 */
let rangeBitwiseAnd = (M, N, ans = 0) => {
    for (let i = 31; i - 1 >= 0; --i)
        if (2**i > N && M >= 2**(i - 1))
            ans |= 2**(i - 1),
              M -= 2**(i - 1),
              N -= 2**(i - 1);
    return ans;
};
console.log(rangeBitwiseAnd(6, 7));