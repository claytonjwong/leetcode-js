/*
 * https://leetcode.com/contest/weekly-contest-200/ranking/
 *
 * Rank            Name             Score    Finish Time    Q1 (3)     Q2 (4)     Q3 (5)    Q4 (6)
 * 8074 / 15381    claytonjwong     3        0:02:40        0:02:40
 *
 * Screenshare: https://www.youtube.com/watch?v=ZDOjZwHqTgU
 */

/*
 * 1535. Find the Winner of an Array Game
 *
 * Q: https://leetcode.com/problems/find-the-winner-of-an-array-game/
 * A: https://leetcode.com/problems/find-the-winner-of-an-array-game/discuss/768447/Javascript-Python3-C%2B%2B-Deque-a-b-...-first-two-elements
 */
let getWinner = (A, K, min = Math.min, max = Math.max, same = 0) => {
    let N = A.length;
    if (N == 1 || K == 1)          // 💎 edge cases
        return max(A[0], A[1]);
    if (N <= K)                    // 💎 edge cases
        return max(...A);
    q = [...A];
    for (;;) {                     // compare first two popped elements: A[ ✅ a, 🚫 b, ... ] 👀
        a = q.shift();
        b = q.shift();
        if (a < b)                 // case 1: ⭐️ diff winner 🚫 b, reset same to 1
            same = 1;
        if (b < a && K <= ++same)  // case 2: ⭐️ same winner ✅ a, increment same by 1
            return a;              //         🎯 same winner ✅ a, target K times
        q.unshift(max(a, b));      // push max to front 👈
        q.push(min(a, b));         // push min to back  👉
    }
};
