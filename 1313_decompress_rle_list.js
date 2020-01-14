/*
 * 1313. Decompress Run-Length Encoded List
 *
 * Q: https://leetcode.com/problems/decompress-run-length-encoded-list/
 * A: https://leetcode.com/problems/decompress-run-length-encoded-list/discuss/479575/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let decompressRLElist = (A, ans = []) => {
    for (let i = 1; i < A.length; i += 2)
        ans.push(...Array(A[i - 1]).fill(A[i]));
    return ans;
};
console.log(decompressRLElist([1,2,3,4]));