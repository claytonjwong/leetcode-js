/*
 * 74. Search a 2D Matrix
 *
 * Q: https://leetcode.com/problems/search-a-2d-matrix/
 * A: https://leetcode.com/problems/search-a-2d-matrix/discuss/605294/Javascript-and-C%2B%2B-solutions
 */

let searchMatrix = (A, T) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    if (!M || !N)
        return false;
    let find = (A, i, j) => {
        while (i < j) {
            let k = Math.floor((i + j) / 2);
            if (T > A[k])
                i = k + 1;
            else
                j = k;
        }
        return i;
    };
    let rows = A.map(row => row[N - 1]);
    let i = find(rows, 0, M - 1);
    let j = find(A[i], 0, N - 1);
    return A[i][j] == T;
};
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 21));