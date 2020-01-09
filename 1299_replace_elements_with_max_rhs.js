/*
 * 1299. Replace Elements with Greatest Element on Right Side
 *
 * Q: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * A: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/discuss/474473/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
/*
let replaceElements = A => {
    let N = A.length, max = A[N - 1];
    A[N - 1] = -1;
    for (let i = N - 2; i >= 0; --i) {
        let pre = A[i];
        A[i] = Math.max(max, A[i + 1]);
        max = Math.max(max, pre);
    }
    return A;
};
*/

let replaceElements = (A, pre = 0) => {
    let N = A.length, max = A[N - 1];
    A[N - 1] = -1;
    for (let i = N - 2; i >= 0; --i, max = Math.max(max, pre))
        pre = A[i], A[i] = Math.max(max, A[i + 1]);
    return A;
};
console.log(replaceElements([17,18,5,4,6,1]));
