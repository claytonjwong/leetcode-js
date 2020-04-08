/*
 * 1155. Number of Dice Rolls with Target Sum
 *
 * Q: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
 * A: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/discuss/402767/Javascript-and-C%2B%2B-Solutions
 */

let numRollsToTarget = (d, f, target, m = [...Array(31)].map(row => Array(1001).fill(-1))) => {
    let go = (d, target, cnt = 0) => {
        if (m[d][target] > -1)
            return m[d][target];
        if (d == 0)
            return m[d][target] = Number(target == 0);
        for (let i = 1; i <= f; ++i)
            if (target - i >= 0)
                cnt = (cnt + go(d - 1, target - i)) % (1e9 + 7);
        return m[d][target] = cnt;
    };
    return go(d, target);
};
console.log(numRollsToTarget(30, 30, 500));