/*
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * Q: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * A: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/692931/Javascript-and-C%2B%2B-solutions
 */
let searchRange = (A, T) => {
    let N = A.length;
    let lo = (i = 0, j = N - 1) => {
        while (i < j) {
            let k = Math.floor((i + j) / 2);
            if (A[k] < T)
                i = k + 1;
            else
                j = k;
        }
        return A[i] == T ? i : -1;
    };
    let hi = (i = 0, j = N - 1) => {
        while (i < j) {
            let k = Math.floor((i + j + 1) / 2);
            if (A[k] <= T)
                i = k;
            else
                j = k - 1;
        }
        return A[i] == T ? i : -1;
    };
    return [lo(), hi()];
};