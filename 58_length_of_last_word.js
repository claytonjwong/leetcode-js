/*
 * 58. Length of Last Word
 *
 * Q: https://leetcode.com/problems/length-of-last-word/
 * A: https://leetcode.com/problems/length-of-last-word/discuss/847943/Javascript-Python3-C%2B%2B-Simple-solutions
 */

let lengthOfLastWord = s => {
    let A = s.split(' ').filter(s => s.length);
    return A.length ? A[A.length - 1].length : 0;
};
