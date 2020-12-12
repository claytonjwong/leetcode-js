/*
 * 1684. Count the Number of Consistent Strings
 *
 * Q: https://leetcode.com/problems/count-the-number-of-consistent-strings/
 * A: https://leetcode.com/problems/count-the-number-of-consistent-strings/discuss/969513/Kt-Js-Py3-Cpp-1-Liners
 */

// 1-liner
let countConsistentStrings = (A, words, dict = new Set(A.split(''))) => _.sum(words.map(word => word.split('').every(c => dict.has(c))));

// verbose
let countConsistentStrings = (A, words, cnt = 0) => {
    let dict = new Set(A.split(''));
    for (let word of words)
        if (word.split('').every(c => dict.has(c)))
            ++cnt;
    return cnt;
};
