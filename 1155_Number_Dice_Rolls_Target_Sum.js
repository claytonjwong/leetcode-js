/*

1155. Number of Dice Rolls With Target Sum

Q: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
A: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/discuss/402767/Javascript-and-C%2B%2B-Solutions

*/

/*

for each dice 0..N-1 inclusive (recusively reduce dice and t by the die face value until there are none ie. the base case is reached)

if d == 0
    return t == 0

ans = 0
for each face value 1..f inclusive
    if t - f >= 0
        ans += recusive call with one less dice
return ans
*/

/**
 * @param {number} d
 * @param {number} f
 * @param {number} t
 * @return {number}
 */
// var numRollsToTarget = (d, f, t, ans=0) => {
//     if (d == 0)
//         return t == 0;
//     for (let i=1; i <= f; ++i)
//         if (t - i >= 0)
//             ans += numRollsToTarget(d - 1, f, t - i);
//     return ans;
// };


// let memo = [...Array(30 + 1)].map(() => Array(1000 + 1).fill(-1));
// var numRollsToTarget = (d, f, t) => {
//     let go = (d, f, t, ans=0) => {
//         if (memo[d][t] > -1)
//             return memo[d][t];
//         if (d == 0)
//             return memo[d][t] = t == 0;
//         for (let i=1; i <= f; ++i)
//             if (t - i >= 0)
//                 ans = (ans + go(d - 1, f, t - i)) % (1e9 + 7);
//         return memo[d][t] = ans;
//     };
//     return go(d, f, t);
// };

// var numRollsToTarget = (d, f, t, ans=0) => {
//     let dp = [...Array(d + 1)].map(() => Array(t + 1).fill(0));
//     dp[0][0] = 1;
//     for (let i=1; i <= d; ++i)
//         for (let j=1; j <= t; ++j)
//             for (let k=1; k <= f; ++k)
//                 if (j - k >= 0)
//                     dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % (1e9 + 7);
//     return dp[d][t];
// };

var numRollsToTarget = (d, f, t, ans=0) => {
    let cur = Array(t + 1).fill(0);
    cur[0] = 1;
    for (let i=1; i <= d; ++i) {
        let pre = [...cur];
        cur.fill(0);
        for (let j=1; j <= t; ++j)
            for (let k=1; k <= f; ++k)
                if (j - k >= 0)
                    cur[j] = (cur[j] + pre[j - k]) % (1e9 + 7);
    }
    return cur[t];
};


console.log(numRollsToTarget(30, 30, 500));