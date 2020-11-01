/*
 * 1641. Count Sorted Vowel Strings
 *
 * Q: https://leetcode.com/problems/count-sorted-vowel-strings/
 * A: https://leetcode.com/problems/count-sorted-vowel-strings/discuss/919428/Kt-Js-Py3-Cpp-1-Liners
 */

// 1-liner
let countVowelStrings = (N, last = '0') =>
    !N ? 1 : _.sum('aeiou'.split('').map(c => last.localeCompare(c) <= 0 ? countVowelStrings(N - 1, c) : 0));

// verbose
let countVowelStrings = (N, last = '0', total = 0) => {
    if (!N)
        return 1;
    for (let c of 'aeiou')
        if (last.localeCompare(c) <= 0)
            total += countVowelStrings(N - 1, c);
    return total;
};
