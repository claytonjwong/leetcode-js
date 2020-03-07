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

let nextGreaterElement = (A, B, m = {}) => {
    let N = B.length;
    if (N == 0)
        return [];
    for (let i = 0; i + 1 < N; ++i) {
        let j = i + 1;
        for (; j < N && B[i] > B[j]; ++j);
        if (j == N)
            m[B[i]] = -1;
        else
            m[B[i]] = B[j];
    }
    m[B[N - 1]] = -1;
    return [...A].map(x => m[x]);
};

// TODO: use a stack to generate the map more efficiently in O(N) time