/*

 1198. Find Smallest Common Element in All Rows

 Q: https://leetcode.com/problems/find-smallest-common-element-in-all-rows/
 A: https://leetcode.com/problems/find-smallest-common-element-in-all-rows/discuss/391150/Javascript-and-C%2B%2B-solutions

 */

// /**
//  * @param {number[][]} A
//  * @return {number}
//  */
// var smallestCommonElement = (A, cnt=Array(1e4+1).fill(0)) => {
//     const M = A.length,
//           N = A[0].length;
//     for (let j=0; j < N; ++j) {
//         for (let i=0; i < M; ++i) {
//             if (++cnt[A[i][j]] == M)
//                 return A[i][j];
//         }
//     }
//     return -1;
// };

/**
 * @param {number[][]} A
 * @return {number}
 */
var smallestCommonElement = (A, cnt=Array(1e4+1).fill(0)) => {
    for (let row of A)
        for (let num of row)
            if (++cnt[num] == A.length)
                return num;
    return -1;
};

const A = [
    [1,2,3,4,5],
    [2,4,5,8,10],
    [3,5,7,9,11],
    [1,3,5,7,9],
];
console.log(smallestCommonElement(A));
