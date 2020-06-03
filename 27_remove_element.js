/*
 * 27. Remove Element
 *
 * Q: https://leetcode.com/problems/remove-element/
 * A: https://leetcode.com/problems/remove-element/discuss/667292/Javascript-and-C%2B%2B-solutions
 */

let removeElement = (A, T, j = 0) => { // let j be the write index
    for (let i = 0; i < A.length; ++i)
        if (A[i] != T)
            A[j++] = A[i];
    return j;
};