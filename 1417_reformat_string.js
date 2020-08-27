/*
 * 1417. Reformat The String
 *
 * Q: https://leetcode.com/problems/reformat-the-string/
 * A: https://leetcode.com/problems/reformat-the-string/discuss/586472/Javascript-Python3-C%2B%2B-zip()
 */

// concise
let reformat = s => {
    let digits = s.split('').filter(c => c.charCodeAt(0) < 97),   // 97 is the ordinal value of 'a'
        letters = s.split('').filter(c => c.charCodeAt(0) >= 97);
    if (1 < Math.abs(letters.length - digits.length))
        return '';
    if (digits.length < letters.length)
        ans = _.zip(letters, digits);
    else
        ans = _.zip(digits, letters);
    return ans.flat().join('');
};

// verbose
let reformat = s => {
    let letters = s.split('').filter(c => c.charCodeAt(0) >= 97),
        digits = s.split('').filter(c => c.charCodeAt(0) < 97);
    if (Math.abs(letters.length - digits.length) > 1)
        return '';
    let N = letters.length + digits.length;
    let ans = Array(N);
    let turn = letters.length >= digits.length ? 0 : 1; // 0 == letters first  1 == digits first
    for (let i = 0; i < N; ++i)
        if (i % 2 == turn)
            ans[i] = letters.shift();
        else
            ans[i] = digits.shift();
    return ans.join('');
};
