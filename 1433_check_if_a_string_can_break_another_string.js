/*
 * 1433. Check If a String Can Break Another String
 *
 * Q: https://leetcode.com/problems/check-if-a-string-can-break-another-string/
 * A: https://leetcode.com/problems/check-if-a-string-can-break-another-string/discuss/613490/Javascript-and-C%2B%2B-solutions
 */

let checkIfCanBreak = (a, b) => {
    let A = a.split('').sort(),
        B = b.split('').sort();
    return A.every((_, i) => A[i].localeCompare(B[i]) <= 0);
};