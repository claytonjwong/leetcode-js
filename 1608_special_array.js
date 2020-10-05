/*
 * 1608. Special Array With X Elements Greater Than or Equal X
 *
 * Q: https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 * A: https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/discuss/877706/Javascript-Python3-C%2B%2B-Lower-Bound-(ie.-Binary-Search)
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
let specialArray = A => {
    let N = A.length;
    A.sort((a, b) => a - b);
    for (let i = 0; i <= N; ++i)
        if (lowerBound(A, i) == N - i)
            return i;
    return -1;
};
