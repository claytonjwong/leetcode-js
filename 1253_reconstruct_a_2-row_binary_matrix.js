/*
 * 1253. Reconstruct a 2-Row Binary Matrix
 * 
 * Q: https://leetcode.com/contest/weekly-contest-162/problems/reconstruct-a-2-row-binary-matrix/
 * A: https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/discuss/425923/Javascript-and-C%2B%2B-solutions
 * 
 */

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} A
 * @return {number[][]}
 */
var reconstructMatrix = (upper, lower, A, invalid=[]) => {
    let N = A.length;
    let m = [...Array(2)].map(() => Array(N).fill(0));
    for (let i=0; i < N; ++i) {
        if (A[i] == 1) {
            if (upper > lower)
                m[0][i] = 1, --upper;
            else
                m[1][i] = 1, --lower;
        }
        if (A[i] == 2) {
            m[0][i] = 1, --upper;
            m[1][i] = 1, --lower;
        }
    }
    return upper == 0 && lower == 0 ? m : invalid;
};
let ans = reconstructMatrix(5, 5, [2,1,2,0,1,0,1,2,0,1]);
console.log(ans[0]);
console.log(ans[1]);
