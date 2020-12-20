/*
 * 1695. Maximum Erasure Value
 *
 * Q: https://leetcode.com/problems/maximum-erasure-value/
 * A: https://leetcode.com/problems/maximum-erasure-value/discuss/978556/Kt-Js-Py3-Cpp-Sliding-Window-%2B-Seen-Set
 */

let maximumUniqueSubarray = (A, seen = new Set(), total = 0, best = 0) => {
    let N = A.length,
        i = 0,
        j = 0;
    while (j < N) {
        if (seen.has(A[j]))            // 👉 shrink window to maintain loop invariant A[i..j] 👀 uniquely seen
            total -= A[i],
            seen.delete(A[i++]);
        else                           // 👉 expand window
            total += A[j],
            seen.add(A[j++]);
        best = Math.max(best, total);  // 🎯 best total A[i..j]
    }
    return best;
};
