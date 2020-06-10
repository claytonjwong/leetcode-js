/*
 * 35. Search Insert Position
 *
 * Q: https://leetcode.com/problems/search-insert-position/
 * A: https://leetcode.com/problems/search-insert-position/discuss/680361/Javascript-and-C%2B%2B-solutions
 */

let searchInsert = (A, T) => {
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (T == A[k])
            return k;
        if (T > A[k]) i = k + 1;
        if (T < A[k]) j = k - 1;
    }
    return !N ? 0 : T <= A[i] ? i : i + 1;
};