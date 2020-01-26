/*
 * 1320. Minimum Distance to Type a Word Using Two Fingers
 *
 * Q: https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/
 * A: https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/discuss/488589/Javascript-and-C%2B%2B-solutions
 */

let minimumDistance = s => {
    let cost = (beg, end) => {
        if (beg == Infinity) // first time finger used
            return 0;
        beg = beg.charCodeAt(0) - 'A'.charCodeAt(0);
        end = end.charCodeAt(0) - 'A'.charCodeAt(0);
        let f = Math.floor, abs = Math.abs;
        return abs(f(beg / 6) - f(end / 6)) + abs(f(beg % 6) - f(end % 6));
    };
    let N = s.length;
    let go = (i = 0, one = Infinity, two = Infinity, m = {}) => {
        if (i == N)
            return 0;
        let key = `${i},${one},${two}`;
        if (m[key])
            return m[key];
        return m[key] = Math.min(
            cost(one, s[i]) + go(i + 1, s[i], two, m),
            cost(two, s[i]) + go(i + 1, one, s[i], m)
        );
    };
    return go();
};
console.log(minimumDistance('CAKE'));