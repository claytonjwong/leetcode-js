/*
 * 1539. Kth Missing Positive Number
 *
 * Q: https://leetcode.com/problems/kth-missing-positive-number/
 * A: https://leetcode.com/problems/kth-missing-positive-number/discuss/780016/Kt-Js-Py3-Cpp-Seen-Set-%2B-Concise
 */

// seen
let findKthPositive = (A, K) => {
    let seen = new Set(A);
    for (let i = 1;; ++i)
        if (!seen.has(i) && !--K)
            return i;
};

// concise
let findKthPositive = (A, k) => {
    let i = 0,
        x = 0;
    while (k && i < A.length) {
        if (++x == A[i])
            ++i;
        else
            --k;
    }
    return x + k;
};
