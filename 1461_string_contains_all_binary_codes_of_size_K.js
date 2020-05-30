/*
 * 1461. Check If a String Contains All Binary Codes of Size K
 *
 * Q: https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
 * A: https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/discuss/660632/Incorrect-problem-statement!!!
 */
let hasAllCodes = (S, K, q = [], all = new Set()) => {
    S.split('').forEach(c => {
        q.push(c);
        if (q.length == K) all.add(q.join('')), q.shift();
    })
    return all.size == 1 << K;
};
