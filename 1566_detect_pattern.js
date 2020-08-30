/*
 * 1566. Detect Pattern of Length M Repeated K or More Times
 *
 * Q: https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/
 * A: https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/discuss/819276/Javascript-Python3-C%2B%2B-T-Pieces-Whole
 */

let containsPattern = (A, K, T) => {
    for (let i = 0, j = K * T; j <= A.length; ++i, ++j) {
        let piece = A.slice(i, i + K).join(''),
            whole = piece.repeat(T);
        if (whole == A.slice(i, j).join(''))
            return true;
    }
    return false;
};
