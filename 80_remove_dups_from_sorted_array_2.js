/*
 * 80. Remove Duplicates from Sorted Array II
 *
 * Q: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * A: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/discuss/493516/Javascript-and-C%2B%2B-solutions
 */

let removeDuplicates = (A, i = 0) => {
    for (let x of A)
        if (i < 2 || A[i - 2] < x)
            A[i++] = x;
    return i;
};
let A = [1,1,1,2,2,3];
let end = removeDuplicates(A);
console.log(A.slice(0, end));