/*
 * 665. Non-decreasing Array
 *
 * Q: https://leetcode.com/problems/non-decreasing-array/
 * A: https://leetcode.com/problems/non-decreasing-array/discuss/106835/Javascript-and-C%2B%2B-solutions
 */

let checkPossibility = A => {
    let N = A.length;
    let is_sorted = () => A.every((_, i) => !i || A[i - 1] <= A[i]);
    for (let i = 1; i< N; ++i) {
        // ✅ case 1: monotonically non-decreasing values
        if (A[i - 1] <= A[i])
            continue;
        // ❌ case 2: first violation found, attempt to "fix" A by "erasing" A[i - 1] xor A[i]
        let temp = A[i - 1];
        A[i - 1] = A[i];         // ⭐️ "erase" A[i - 1] and return true immediately if A is sorted with this "fix"
        if (is_sorted())
            return true;
        A[i] = A[i - 1] = temp;  // ⭐️ "erase" A[i]     and return true immediately if A is sorted with this "fix"
        if (is_sorted())
            return true;
        return false; // 🚫 could *not* "fix" first violation found
    }
    return true; // ✅ A was already sorted and did *not* need a "fix"
};
