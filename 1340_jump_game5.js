/*
 * 1340. Jump Game V
 *
 * Q: https://leetcode.com/problems/jump-game-v/
 * A: https://leetcode.com/problems/jump-game-v/discuss/521774/Javascript-and-C%2B%2B-solutions
 */

let maxJumps = (A, K, m = {}, ans = 0, min = Math.min, max = Math.max) => {
    let go = i => {
        if (m[i])
            return m[i];
        let L = 0, R = 0, N = A.length;
        for (let j = i - 1; j >= max(i - K, 0    ) && A[j] < A[i]; --j) L = max(L, 1 + go(j)); // 👈 to-the-(L)eft
        for (let j = i + 1; j <= min(i + K, N - 1) && A[j] < A[i]; ++j) R = max(R, 1 + go(j)); //    to-the-(R)ight 👉
        return m[i] = max(L, R, 1);
    };
    for (let i = 0; i < A.length; ++i)
        ans = max(ans, go(i));
    return ans;
};