/*
 * 1291. Sequential Digits
 *
 * Q: https://leetcode.com/problems/sequential-digits/
 * A: https://leetcode.com/problems/sequential-digits/discuss/455969/Javascript-and-C%2B%2B-solutions
 */

let sequentialDigits = (lo, hi, ans = []) => {
    let go = x => {
        if (hi < x)
            return;
        if (lo <= x)                    // 🎯 lo <= x <= hi
            ans.push(x);
        let last = x % 10,
            next = last + 1;
        if (next < 10)
            go(10 * x + next);
    }
    for (let i = 1; i < 10; go(i++));
    return ans.sort((a, b) => a - b);
};
