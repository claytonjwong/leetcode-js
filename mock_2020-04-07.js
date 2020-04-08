/*
Amazon- Online Assessment
Completed April 7, 2020 5:38 PM
88%
Your interview score of 7.11/10 beats 88% of all users.
Time Spent: 24 minutes 57 seconds
Time Allotted: 1 hour
*/


/*
 * 1122. Relative Sort Array
 *
 * Q: https://leetcode.com/problems/relative-sort-array/
 * A: https://leetcode.com/problems/relative-sort-array/discuss/568451/Javascript-and-C%2B%2B-solutions
 */

let relativeSortArray = (A, order, m = new Map(), leftovers = [], ans = []) => {
    order.forEach(x => m.set(x, 0));
    A.forEach(x => {
        if (m.has(x))
            m.set(x, 1 + m.get(x));
        else
            leftovers.push(x);
    });
    order.forEach(x => ans = ans.concat(Array(m.get(x)).fill(x)));
    return ans.concat(leftovers.sort((a, b) => a - b));
};
console.log(...relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));


/*
 * 1155. Number of Dice Rolls With Target Sum
 *
 * Q: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
 * A: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/discuss/402767/Javascript-and-C%2B%2B-Solutions
 */

let numRollsToTarget = (d, f, t, m = [...Array(30 + 1)].map(row => Array(1000 + 1).fill(-1))) => {
    let go = (d, t, cnt = 0) => {
        if (m[d][t] > -1)
            return m[d][t];
        if (d == 0)
            return m[d][t] = Number(t == 0);
        for (let i = 1; i <= f; ++i)
            if (t - i >= 0)
                cnt = (cnt + go(d - 1, t - i)) % (1e9 + 7);
        return m[d][t] = cnt;
    };
    return go(d, t);
};