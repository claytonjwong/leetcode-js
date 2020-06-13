/*
 * https://leetcode.com/contest/biweekly-contest-28/ranking/75/
 *
 * Rank          Name           Score   Finish Time     Q1 (3)     Q2 (4)     Q3 (5)   Q4 (7)
 * 1858 / 6427   claytonjwong   7       0:13:22         0:06:49    0:13:22
 */

/*
 * 1475. Final Prices With a Special Discount in a Shop
 *
 * Q: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 * A: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/discuss/685454/Javascript-and-C%2B%2B-solutions
 */
 // brute-force
let finalPrices = A => {
    let N = A.length;
    for (let i = 0; i < N; ++i) {
        for (let j = i + 1; j < N; ++j) {
            if (A[i] >= A[j]) {
                A[i] -= A[j]; // apply discount 🎯
                break;
            }
        }
    }
    return A;
};
// stack
let finalPrices = (A, S = []) => {
    for (let j = 0; j < A.length; ++j) {
        while (S.length) {
            let i = S[S.length - 1]; // i is the top of the stack
            if (A[i] < A[j])
                break;
            A[i] -= A[j]; // A[i] >= A[j] apply discount 🎯
            S.pop();
        }
        S.push(j); // push current j to stack as previous i
    }
    return A;
};

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
