/*
 * 1758. Minimum Changes To Make Alternating Binary String
 *
 * Q: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 * A: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/discuss/1064549/Kt-Js-Py3-Cpp-Explore-2-Candidates
 */

let minOperations = (s, a = 0, b = 1, first = 0, second = 0) => {
    let ordinal = c => c.charCodeAt(0) - '0'.charCodeAt(0);
    for (let c of s) {
        if (a == ordinal(c)) ++first;
        if (b == ordinal(c)) ++second;
        a ^= 1, b ^= 1;
    }
    return Math.min(first, second);
};
