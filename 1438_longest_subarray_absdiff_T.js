/*
 * 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 *
 * Q: https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit
 * A: https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/discuss/751204/Javascript-Python3-C%2B%2B-Map-for-MinMax
 */

let longestSubarray = (A, T, m = new Map(), best = 1) => {
    let N = A.length,
        i = 0,
        j = 1; // A[i..j) => i inclusive to j non-inclusive
    m.set(A[i], 1);
    for (;;) {
        let minmax = [...m.entries()].sort((a, b) => a[0] - b[0]).map(([x, _]) => x); // hack since JS lacks an ordered map
        let min = minmax[0],
            max = minmax[minmax.length - 1];
        if (max - min <= T) {
            best = Math.max(best, j - i); // 🎯 best, ie. max length from i inclusive to j non-inclusive
            if (j == N)
                break;
            m.set(A[j], 1 + (m.get(A[j]) || 0)); // "grow" window
            ++j;
        } else {
            m.set(A[i], -1 + m.get(A[i]));       // "shrink" window
            if (!m.get(A[i]))
                m.delete(A[i]);
            ++i;
        }
    }
    return best;
};
