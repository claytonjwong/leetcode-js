/*
 * 1424. Diagonal Traverse II
 *
 * Q: https://leetcode.com/problems/diagonal-traverse-ii/
 * A: https://leetcode.com/problems/diagonal-traverse-ii/discuss/615470/Javascript-and-C%2B%2B-solutions
 */

let findDiagonalOrder = (A, m = new Map(), ans = []) => {
    let M = A.length;
    for (let i = M - 1; i >= 0; --i)
        for (let j = A[i].length - 1; j >= 0; --j)
            m.set(i + j, (m.get(i + j) || []).concat(A[i][j]));
    [...m.entries()].sort((a, b) => a[0] - b[0]).map(a => a[1]).forEach(diag => ans.push(...diag));
    return ans;
};