/*
 * 1708. Largest Subarray Length K
 *
 * Q: https://leetcode.com/problems/largest-subarray-length-k/
 * A: https://leetcode.com/problems/largest-subarray-length-k/discuss/1007617/Kt-Js-Py3-Cpp-Sliding-Window
 */

let largestSubarray = (A, K) => {
    let cand = A.slice(0, K),
        best = [...cand];
    for (let i = K; i < A.length; ++i) {
        cand.shift(), cand.push(A[i]);
        let better = false;
        for (let j = 0; j < K; ++j) {
            if (best[j] != cand[j]) {
                better = best[j] < cand[j];
                break;
            }
        }
        if (better)
            best = [...cand];
    }
    return best;
};
