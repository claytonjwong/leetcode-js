/*
 * 1476. Subrectangle Queries
 *
 * Q: https://leetcode.com/problems/subrectangle-queries/
 * A: https://leetcode.com/problems/subrectangle-queries/discuss/685431/Javascript-and-C%2B%2B-solutions
 */
class SubrectangleQueries {
    constructor(A) {
        this.A = A;
    }
    updateSubrectangle(p, q, u, v, x, A = this.A) {
        for (let i = p; i <= u; ++i)
            for (let j = q; j <= v; ++j)
                A[i][j] = x;
    }
    getValue(i, j, A = this.A) {
        return A[i][j];
    }
}