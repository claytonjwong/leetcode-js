/*
 * 1449. Form Largest Integer With Digits That Add up to Target
 *
 * Q: https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
 * A: https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/discuss/644535/Javascript-and-C%2B%2B-solutions
 */

// TopDown: TLE
let largestNumber = (A, T) => {
    let best = (a, b) => {
        if (a.length < b.length) return b;
        if (b.length < a.length) return a;
        for (let i = 0; i < a.length; ++i) {
            if (a[i] < b[i]) return b;
            if (b[i] < a[i]) return a;
        }
        return a;
    };
    let go = (t = T, max = []) => {
        if (!t)
            return []; // target sum reached ✅
        for (let i = 0; i < 9; ++i) {
            if (t - A[i] < 0)
                continue; // A[i] exceeds target sum ❌
            let cand = go(t - A[i]);
            if (!cand)
                continue; // target sum not reached ❌
            cand = cand.concat(i + 1); // +1 for 1-based indexing
            max = best(max, cand); // max candidate 🎯
        }
        return max.length ? max : null; // if max is empty, max is invalid since t > 0 (ie. target sum is not reached)
    };
    let max = go();
    return max ? max.join('') : '0';
};

// TopDown w/ Memo: TLE
let largestNumber = (A, T, m = {}) => {
    let best = (a, b) => {
        if (a.length < b.length) return b;
        if (b.length < a.length) return a;
        for (let i = 0; i < a.length; ++i) {
            if (a[i] < b[i]) return b;
            if (b[i] < a[i]) return a;
        }
        return a;
    };
    let go = (t = T, max = []) => {
        if (m[t])
            return m[t];
        if (!t)
            return m[t] = []; // target sum reached ✅
        for (let i = 0; i < 9; ++i) {
            if (t - A[i] < 0)
                continue; // A[i] exceeds target sum ❌
            let cand = go(t - A[i]);
            if (!cand)
                continue; // target sum not reached ❌
            cand = cand.concat(i + 1); // +1 for 1-based indexing
            max = best(max, cand); // max candidate 🎯
        }
        return m[t] = max.length ? max : null; // if max is empty, max is invalid since t > 0 (ie. target sum is not reached)
    };
    let max = go();
    return max ? max.join('') : '0';
};

// Top-Down w/ Memo2: TLE
let largestNumber = (A, T, N = 9, path = []) => {
    let m = Array(T + 1).fill(-1);
    let go = (t = T) => {
        if (m[t] > -1)
            return m[t];
        if (!t)
            return m[t] = 0; // target sum reached ✅
        for (let i = 0; i < N; ++i) {
            if (t - A[i] < 0)
                continue; // A[i] exceeds target sum ❌
            let cand = go(t - A[i]);
            if (cand > -1)
                m[t] = Math.max(m[t], 1 + cand);
        }
        return m[t];
    };
    go();
    if (m[T] == -1) // target sum not reached ❌
        return '0';
    for (let i = N - 1, t = T; 0 <= i; --i)
        while (0 <= t - A[i] && m[t] == 1 + m[t - A[i]])
            path.push(i + 1), // +1 for 1-based indexing
            t -= A[i];
    return path.join(''); // reconstructed path 🎯
};

// bottom-up: AC
let largestNumber = (A, T, N = 9, path = []) => {
    let dp = Array(T + 1).fill(-1);
    dp[0] = 0; // target sum 0 is reached with 0 digits ✅
    for (let t = 1; t <= T; ++t)
        for (let i = 0; i < N; ++i)
            if (0 <= t - A[i] && dp[t - A[i]] > -1)
                dp[t] = Math.max(dp[t], 1 + dp[t - A[i]]);
    if (dp[T] == -1) // target sum not reached ❌
        return '0';
    for (let i = N - 1, t = T; 0 <= i; --i)
        while (0 <= t - A[i] && dp[t] == 1 + dp[t - A[i]])
            path.push(i + 1), // +1 for 1-based indexing
            t -= A[i];
    return path.join(''); // reconstructed path 🎯
};

console.log(largestNumber([6,10,15,40,40,40,40,40,40], 47));