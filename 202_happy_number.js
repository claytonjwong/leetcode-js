/*
 * 202. Happy Number
 *
 * Q: https://leetcode.com/problems/happy-number/
 * A: https://leetcode.com/problems/happy-number/discuss/560627/Javascript-and-C%2B%2B-solutions
 */

let isHappy = x => {
    let go = (x, seen = new Set()) => {
        if (x == 1) // target 🎯
            return true;
        if (seen.has(x)) // x has already been seen ❌
            return false;
        seen.add(x);
        let next = 0;
        while (x) {
            let d = x % 10;
            next += d * d;
            x = Math.floor(x / 10);
        }
        return go(next, seen);
    };
    return go(x);
};