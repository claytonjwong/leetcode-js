/*
 * 1309. Decrypt String from Alphabet to Integer Mapping
 *
 * Q: https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 * A: https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/discuss/471422/Javascript-and-C%2B%2B-solutions
 */

/*

reduce from right-to-left

if last char is '#', then take preceeding 2 chars as the value
else take last char as the value

*/

/**
 * @param {string} s
 * @return {string}
 */
let freqAlphabets = s => {
    let A = s.split(''), ans = [], offset = 96;
    while (A.length > 0) {
        let n = A.length, x = 0;
        if (A[n - 1] == '#')
            x = Number([A[n - 3], A[n - 2]].join('')), A = A.slice(0, n - 3);
        else
            x = Number(A[n - 1]), A.pop();
        ans.unshift(String.fromCharCode(x + offset));
    }
    return ans.join('');
};
let ans = freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#');
console.log(ans);