/*
 * 459. Repeated Substring Pattern
 *
 * Q: https://leetcode.com/problems/repeated-substring-pattern/
 * A: https://leetcode.com/problems/repeated-substring-pattern/discuss/826659/Javascript-Python3-C%2B%2B-Recursive-%2B-.-Iterative
 */

// recursive
let repeatedSubstringPattern = (S, k = Math.floor(S.length / 2)) =>
    !k ? false : (!(S.length % k) && S.split('').every((_, i) => S.length <= i + k || S[i] == S[i + k])) || repeatedSubstringPattern(S, k - 1);

// iterative
let repeatedSubstringPattern = S => {
    let N = S.length;
    for (let k = 1; k <= Math.floor(N / 2); ++k) {
        if (N % k)
            continue;                          // 🚫 candidate pattern of length k must evenly divide N
        let i = 0;
        while (i + k < N && S[i] == S[i + k])  // 🚌 explore candidate pattern of length k
            ++i;
        if (i + k == N)
            return true;                       // 🎯 match found for candidate pattern of length k
    }
    return false;
};
