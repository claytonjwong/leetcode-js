/*
 * 1320. Minimum Distance to Type a Word Using Two Fingers
 *
 * Q: https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/
 * A: https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/discuss/488589/Javascript-and-C%2B%2B-solutions
 */

/*
let minimumDistance = word => {
    let cost = (beg, end) => {
        if (beg == Infinity) // first time finger used
            return 0;
        let a = beg.charCodeAt(0) - 65, // offset 'A' to 0
            b = end.charCodeAt(0) - 65;
        let f = Math.floor, abs = Math.abs;
        return abs(f(a / 6) - f(b / 6)) + abs(f(a % 6) - f(b % 6));
    };
    let go = (word, i = 0, one = Infinity, two = Infinity) => {
        if (i == word.length)
            return 0;
        return Math.min(
            cost(one, word[i]) + go(word, i + 1, word[i], two),
            cost(two, word[i]) + go(word, i + 1, one, word[i])
        );
    };
    return go(word);
};
*/

let minimumDistance = word => {
    let cost = (beg, end) => {
        if (beg == Infinity) // first time finger used
            return 0;
        let a = beg.charCodeAt(0) - 65, // offet 'A' to 0
            b = end.charCodeAt(0) - 65;
        let f = Math.floor, abs = Math.abs;
        return abs(f(a / 6) - f(b / 6)) + abs(f(a % 6) - f(b % 6));
    };
    let go = (s, i = 0, one = Infinity, two = Infinity, memo = {}) => {
        if (i == s.length)
            return 0;
        let key = `${i},${one},${two}`;
        if (memo[key])
            return memo[key];
        return memo[key] = Math.min(
            cost(one, s[i]) + go(s, i + 1, s[i], two, memo),
            cost(two, s[i]) + go(s, i + 1, one, s[i], memo)
        );
    };
    return go(word);
};
console.log(minimumDistance('CAKE'));
console.log(minimumDistance('HAPPY'));