/*
 * Apple- Phone Interview
 * Completed June 17, 2020 5:58 PM
 * 99%
 * Your interview score of 9.71/10 beats 99% of all users.
 * Time Spent: 6 minutes 57 seconds
 * Time Allotted: 1 hour 30 minutes
 */

/*
 * 169. Majority Element
 *
 * Q: https://leetcode.com/problems/majority-element/
 * A: https://leetcode.com/problems/majority-element/discuss/618622/Javascript-and-C%2B%2B-solutions
 */
let majorityElement = (A, m = new Map()) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    return [...m.entries()].filter(([_, cnt]) => cnt > A.length / 2).map(([x, _]) => x);
};

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