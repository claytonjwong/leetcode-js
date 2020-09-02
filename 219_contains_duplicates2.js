/*
 * 219. Contains Duplicate II
 *
 * Q: https://leetcode.com/problems/contains-duplicate-ii/
 * A: https://leetcode.com/problems/contains-duplicate-ii/discuss/825078/Javascript-Python3-C%2B%2B-Sliding-Window-Seen-Set
 */

let containsNearbyDuplicate = (A, K, S = new Set()) => {
    for (let i = 0; i < A.length; ++i) {
        if (S.has(A[i]))         // 🎯 duplicate in window
            return true;
        S.add(A[i]);             // ✅ add value in window
        if (0 <= A[i - K])
            S.delete(A[i - K]);  // 🚫 delete value which "fell off the end" as the window slides 👉
    }
    return false;
};
