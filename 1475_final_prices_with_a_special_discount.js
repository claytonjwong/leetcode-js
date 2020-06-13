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
