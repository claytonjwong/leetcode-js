/*
 * 704. Binary Search
 *
 * Q: https://leetcode.com/problems/binary-search/
 * A: https://leetcode.com/problems/binary-search/discuss/600517/Javascript-Python3-C%2B%2B-Lower-Bound
 */

let lowerBound = (A, T) => {
    let N = A.length,
        i = 0,
        j = N;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (A[k] < T)
            i = k + 1;
        else
            j = k;
    }
    return i;
};
let search = (A, T) => {
    let N = A.length,
        i = lowerBound(A, T);
    return i != N && A[i] == T ? i : -1;
};