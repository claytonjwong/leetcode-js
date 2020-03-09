/*
 * 496. Next Greater Element I
 *
 * Q: https://leetcode.com/problems/next-greater-element-i/
 * A: https://leetcode.com/problems/next-greater-element-i/discuss/531111/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let nextGreaterElement = (A, B, m = {}, s = []) => {
    let N = B.length;
    for (let i = N - 1; i >= 0; --i) {
        while (s.length > 0 && B[i] > s[s.length - 1])
            s.pop();
        if (s.length == 0)
            m[B[i]] = -1;
        else
            m[B[i]] = s[s.length - 1];
        s.push(B[i]);
    }
    return [...A].map(x => m[x]);
};