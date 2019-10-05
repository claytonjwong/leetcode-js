/*

1165. Single-Row Keyboard

Q: https://leetcode.com/problems/single-row-keyboard/
A: https://leetcode.com/problems/single-row-keyboard/discuss/397002/Javascript-and-C%2B%2B-Solutions

*/

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = (keyboard, word, m={}) => {
    for (let i=0; i < keyboard.length; m[keyboard[i]]=i, ++i);
    var ans = m[word[0]];
    for (let i=1; i < word.length; ++i)
        ans += Math.abs(m[word[i-1]] - m[word[i]]);
    return ans;
};

const ans = calculateTime('abcdefghijklmnopqrstuvwxyz', 'cba');
console.log(ans);
