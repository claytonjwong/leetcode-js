/*
 * 948. Bag of Tokens
 *
 * Q: https://leetcode.com/problems/bag-of-tokens/
 * A: https://leetcode.com/problems/bag-of-tokens/discuss/909784/Kt-Js-Py3-Cpp-Greedy-Max-Score
 */

let bagOfTokensScore = (A, power, score = 0, best = 0) => {
    A.sort((a, b) => a - b);
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i <= j && (A[i] <= power || 0 < score)) {
        if (A[i] <= power)
            power -= A[i++], ++score;
        else if (0 < score)
            power += A[j--], --score;
        best = Math.max(best, score);
    }
    return best;
};
