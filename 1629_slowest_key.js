/*
 * 1629. Slowest Key
 *
 * Q: https://leetcode.com/problems/slowest-key/
 * A: https://leetcode.com/problems/slowest-key/discuss/909815/Kt-Js-Py3-Cpp-Best-Time
 */

let slowestKey = (A, keys, best = 0, ans = 0) => {
    keys.split('').forEach((key, i) => {
        let time = 0 < i ? A[i] - A[i - 1] : A[i];
        if (best < time || (best == time && ans.localeCompare(key) < 0))
            best = time,
            ans = key;
    });
    return ans;
};
