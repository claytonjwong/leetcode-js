/*
 * 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 *
 * Q: https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 * A: https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/discuss/661630/Javascript-and-C%2B%2B-solutions
 */
let maxArea = (M, N, row, col) =>
    row.concat(0, M).sort((a, b) => a - b).map((_, i, row) => 0 < i ? row[i] - row[i - 1] : 0).reduce((a, b) => Math.max(a, b)) *
    col.concat(0, N).sort((a, b) => a - b).map((_, j, col) => 0 < j ? col[j] - col[j - 1] : 0).reduce((a, b) => Math.max(a, b)) % (1e9 + 7);