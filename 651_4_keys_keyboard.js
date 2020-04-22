/*
 * 651. 4 Keys Keyboard
 *
 * Q: https://leetcode.com/problems/4-keys-keyboard/
 * A: https://leetcode.com/problems/4-keys-keyboard/discuss/591314/Javascript-and-C%2B%2B-solutions
 */

// TLE without memo
let maxA = (N, max = 0) => {
    let go = (k = N, val = 0, buf = 0) => {
        if (!k) {
            max = Math.max(max, val);
            return;
        }
        go(k - 1, val + Math.max(1, buf), buf);
        if (k >= 3)
            go(k - 3, val * 2, val);
    };
    go();
    return max;
};

// AC with memo
let maxA = (N, seen = new Set(), max = 0) => {
    let go = (k = N, val = 0, buf = 0) => {
        if (!k) {
            max = Math.max(max, val);
            return;
        }
        if (seen.has(`${k},${val},${buf}`))
            return;
        go(k - 1, val + Math.max(1, buf), buf);
        if (k >= 3)
            go(k - 3, val * 2, val);
        seen.add(`${k},${val},${buf}`);
    };
    go();
    return max;
};