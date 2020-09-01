/*
 * Weekly Contest 204
 *
 * Rank            Name             Score    Finish Time    Q1 (3)     Q2 (4)        Q3 (6)    Q4 (7)
 * 2025 / 13949    claytonjwong     7        0:50:49        0:17:53    0:40:49 *2
 *
 * Ranking: https://leetcode.com/contest/weekly-contest-204/ranking/81/
 * Screenshare: https://www.youtube.com/watch?v=fPmeK1rsSiY&feature=youtu.be
 */


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


/*
 * 1567. Maximum Length of Subarray With Positive Product
 *
 * Q: https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/
 * A: https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/discuss/822464/Javascript-Python3-C%2B%2B-Sliding-Window
 */

let getMaxLen = (A, cnt = 0, max = 0) => {
    A.push(0);  // ⭐️ sentinel value
    let N = A.length,
        i = 0,
        j = 0;
    while (i != N) {
        // case 1: ➖ collapse window [i 👉 ..j)
        while (j < N && !A[j]) {
            while (i < j) {
                cnt = A[i++] < 0 ? cnt - 1 : cnt;
                max = cnt & 1 ? max : Math.max(max, j - i);
            }
            i = ++j;
        }
        // case 2: ➕ expand window [i..j 👉 )
        while (j < N && A[j]) {
            cnt = A[j++] < 0 ? cnt + 1 : cnt;
            max = cnt & 1 ? max : Math.max(max, j - i);
        }
    }
    return max;
};
