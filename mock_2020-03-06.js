/*
 * 1213. Intersection of Three Sorted Arrays
 *
 * Q: https://leetcode.com/problems/intersection-of-three-sorted-arrays/
 * A: https://leetcode.com/problems/intersection-of-three-sorted-arrays/discuss/531099/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */

// let arraysIntersection = (A, B, C) => {
//     return _.intersection(A, B, C);
// };

let arraysIntersection = (A, B, C, ans = []) => {
    let i = 0, j = 0, k = 0;
    while (i < A.length && j < B.length && k < C.length) {
        let max = Math.max(A[i], B[j], C[k]);
        if (A[i] == max && B[j] == max && C[k] == max)
            ans.push(max),
            ++i, ++j, ++k;
        while (i < A.length && A[i] < max) ++i;
        while (j < B.length && B[j] < max) ++j;
        while (k < C.length && C[k] < max) ++k;
    }
    return ans;
};

// TODO: use binary search to find the max in logarithmic time rather than linear time

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