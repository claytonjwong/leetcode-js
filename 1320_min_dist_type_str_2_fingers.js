/*
 * 1320. Minimum Distance to Type a Word Using Two Fingers
 *
 * Q: https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/
 * A: https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/discuss/488589/Javascript-and-C%2B%2B-solutions
 */

let minimumDistance = (s, m = {}) => {
    let N = s.length;
    let dist = (beg, end) => {
        if (beg == null)
            return 0;
        let abs = Math.abs, f = Math.floor;
        let a = beg.charCodeAt(0) - 65,
            b = end.charCodeAt(0) - 65;
        let i = f(a / 6), j = a % 6;
        let u = f(b / 6), v = b % 6;
        return abs(i - u) + abs(j - v);
    };
    let go = (i = 0, one = null, two = null) => {
        let key = `${i},${one},${two}`;
        if (m[key])
            return m[key]
        if (i == N)
            return m[key] = 0;
        let a = dist(one, s[i]) + go(i + 1, s[i], two),
            b = dist(two, s[i]) + go(i + 1, one, s[i]);
        return m[key] = Math.min(a, b);
    };
    return go();
};
console.log(minimumDistance('CAKE'));