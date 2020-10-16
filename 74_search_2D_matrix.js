/*
 * 74. Search a 2D Matrix
 *
 * Q: https://leetcode.com/problems/search-a-2d-matrix/
 * A: https://leetcode.com/problems/search-a-2d-matrix/discuss/605294/Kt-Js-Py3-Cpp-Upper-Bound-(ie.-Binary-Search)
 */

let upperBound = (A, T) => {
    let N = A.length,
        i = 0,
        j = N;
    while (i < j) {
        let k = Math.floor((i + j + 1) / 2);
        if (A[k] <= T)
            i = k;
        else
            j = k - 1;
    }
    return j + 1;
};
let searchMatrix = (A, T) => {
    if (!A.length || !A[0].length)
        return false;
    let first = A.map(row => row[0]);
    let row = upperBound(first, T) - 1;
    let col = upperBound(A[row], T) - 1;
    return A[row][col] == T;
};
