/*
 * 1658. Minimum Operations to Reduce X to Zero
 *
 * Q: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * A: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/discuss/1016764/Kt-Js-Py3-Cpp-Sliding-Window
 */

let minOperations = (A, K, best = 0) => {
    let T = _.sum(A) - K,
        N = A.length;
    if (!T)                                // 💎 corner case: if sum(A) == K, then minimum is N
        return N;
    let i = 0,
        j = 0,
        t = 0;
    while (j < N) {
        while (i < j && T < t + A[j])      // ⭐️ maintain invariant: sliding window total t does NOT exceed target T
            t -= A[i++];
        t += A[j++];
        if (t == T)
            best = Math.max(best, j - i);  // 💰 best "middle" subarray length [i..j), ie. from i inclusive to j non-inclusive
    }
    return best ? N - best : -1;           // 🎯 minimum "left/right" subarray length == N - best
};
