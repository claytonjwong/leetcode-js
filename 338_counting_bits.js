/*
 * 338. Counting Bits
 *
 * Q: https://leetcode.com/problems/counting-bits/
 * A: https://leetcode.com/problems/counting-bits/discuss/657068/Javascript-and-C%2B%2B-solutions
 */

// verbose
let countBits = (num, pow = 0, ans = [0]) => {
    for (let i = 1; i <= num; ++i)
        if (!(i & (i - 1)))
            ans.push(1), pow = i; // max pow2 so far
        else
            ans.push(1 + ans[i - pow]); // +1 for max pow2 + the prev ans w/o max pow2
    return ans;
};

// concise
let countBits = (num, pow = 0, ans = [0]) => {
    for (let i = 1; i <= num; ++i) {
        if (!(i & (i - 1))) pow = i; // max pow2 so far
        ans.push(1 + ans[i - pow]); // +1 for max pow2 + the prev ans w/o max pow2
    }
    return ans;
};

console.log(countBits(5));