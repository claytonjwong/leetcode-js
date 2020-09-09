/*
 * 165. Compare Version Numbers
 *
 * Q: https://leetcode.com/problems/compare-version-numbers/
 * A: https://leetcode.com/problems/compare-version-numbers/discuss/838238/Javascript-Python3-C%2B%2B-solutions
 */

let compareVersion = (v1, v2) => {
    let A = v1.split('.').map(Number),
        B = v2.split('.').map(Number);
    while (A.length < B.length) A.push(0);
    while (B.length < A.length) B.push(0);
    for (let i = 0; i < A.length; ++i) {
        if (A[i] < B[i]) return -1;
        if (B[i] < A[i]) return  1;
    }
    return 0;
};
