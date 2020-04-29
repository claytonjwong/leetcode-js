/*
 * 970. Powerful Integers
 *
 * Q: https://leetcode.com/problems/powerful-integers/
 * A: https://leetcode.com/problems/powerful-integers/discuss/601881/Javascript-and-C%2B%2B-solutions
 */

let powerfulIntegers = (x, y, T, ans = new Set()) => {
    for (let i = 0; i <= 20; ++i) {
        for (let j = 0; j <= 20; ++j) {
            let z = (x ** i) + (y ** j);
            if (z <= T)
                ans.add(z);
        }
    }
    return [...ans];
};