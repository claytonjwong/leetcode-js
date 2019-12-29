/*
 * 1304. Find N Unique Integers Sum up to Zero
 *
 * Q: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 * A: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/discuss/464406/Javascript-and-C%2B%2B-solutions
 */
let sumZero = n => {
    let pos = [...Array(Math.floor(n / 2)).keys()].map(x => x + 1), neg = [...pos].map(x => -x);
    if (n % 2) neg.unshift(0);
    return neg.reverse().concat(pos);
};
let ans = sumZero(5);
console.log(ans);