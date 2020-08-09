/*
 * https://leetcode.com/contest/biweekly-contest-32/
 * https://www.youtube.com/watch?v=xuyvk8ycHFs
 *
 * Rank            Name            Score    Finish Time     Q1 (3)       Q2 (4)    Q3 (5)    Q4 (6)
 * 6181 / 10463    claytonjwong    3        0:46:48         0:36:48 *2
 */

/*
 * 1539. Kth Missing Positive Number
 *
 * Q: https://leetcode.com/problems/kth-missing-positive-number/
 * A: https://leetcode.com/problems/kth-missing-positive-number/discuss/780016/Javascript-Python3-C%2B%2B-solutions
 */
let findKthPositive = (A, K) => {
    let seen = new Set(A);
    for (let i = 1;; ++i)
        if (!seen.has(i) && !--K)
            return i;
};

/*
 * 1540. Can Convert String in K Moves
 *
 * Q: https://leetcode.com/problems/can-convert-string-in-k-moves/
 * A: https://leetcode.com/problems/can-convert-string-in-k-moves/discuss/780454/Javascript-Python3-C%2B%2B-add-%2B-del-needs
 */
let canConvertString = (s, t, K, need = {}, needs = 0) => {
    if (s.length != t.length)
        return false;
    // ✅ add needs
    for (let i = 0; i < s.length; ++i) {
        let diff = (t[i].charCodeAt(0) - s[i].charCodeAt(0) + 26) % 26;
        if (diff)
            need[diff] = need[diff] ? 1 + need[diff] : 1, ++needs;
    }
    // 🚫 del needs
    for (let i = 1; i <= K && needs; ++i) {
        let diff = i % 26;
        if (need[diff])
            --need[diff], --needs;
    }
    return !needs; // 🎯 no needs
};

// let minInsertions = (s, sum = 0, cnt = 0) => {
//     s.split('').forEach(c => {
//         if (c == '(')
//             sum += 2;
//         if (c == ')')
//             sum -= 1;
//         if (sum == -2)
//             sum = 0, ++cnt; // add left paren to match the two right parens
//     });
//     return cnt + (0 < sum ? sum : sum == -1 ? 2 : 0);
// };

let minInsertions = (s, stack = [], cnt = 0) => {
    s.split('').forEach(c => {
        stack.push(c);
        let N = stack.length;
        if (3 <= N) {
            if (stack[N - 3] == '(' && stack[N - 2] == ')' && stack[N - 1] == ')')
                stack.pop(), stack.pop(), stack.pop();
        }
    });
    return cnt;
};

// one right paren -> penalty 2
// two right paren -> penalty 1
// one left paren -> penalty 2

console.log(minInsertions('(()))')); // ()  ->  1
console.log(minInsertions('())')); // none
console.log(minInsertions('))())(')); // ))(  -> 3
console.log(minInsertions('((((((')); // (((((( -> 12
console.log(minInsertions(')))))))')); // ))))))) -> 3 ( + 2 ) -> 5
console.log(minInsertions('()())))()')); // )() -> 3
//                         213
// '()())))()'
// '()))()'
// ')()'