/*
 * 1344. Angle Between Hands of a Clock
 *
 * Q: https://leetcode.com/problems/angle-between-hands-of-a-clock/
 * A: https://leetcode.com/problems/angle-between-hands-of-a-clock/discuss/509782/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */

// concise
let angleClock = (h, m) => {
    let ans = Math.abs((h % 12 * 30 + m / 2.0) - (m * 6));
    return Math.min(ans, 360 - ans);
};

// verbose
let angleClock = (h, m) => {
    if (h == 12)
        h = 0;
    h = 30 * h + 0.5 * m;
    m = 6 * m;
    let degree = Math.max(h, m) - Math.min(h, m);
    return Math.min(degree, 360 - degree)
};
