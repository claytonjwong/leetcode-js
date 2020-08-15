/*
 * 1541. Minimum Insertions to Balance a Parentheses String
 *
 * Q: https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/
 * A: https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/discuss/793179/Javascript-Python3-C%2B%2B-double-'))'-or-single-')'
 */

// concise
let minInsertions = (s, x = 0, cost = 0) => {
    let N = s.length,
        i = 0;
    let doubleEnd = i => s[i] == ')' && i + 1 < N && s[i + 1] == ')';
    while (i < N) {
        if (s[i] == '(') {            // case '('  -> push to stack 🥞 (increment x count)
            ++x;
        } else {
            if (doubleEnd(i))         // 🍔 🍔 '))' ->  0 penalty if ✅  preceeding '(' on the stack 🥞 (0 < x count)
                cost += !x;           //               +1 penalty if 🚫  preceeding '(' on the stack 🥞 (0 < x count)
            else                      // 🍔    ')'  -> +1 penalty if ✅  preceeding '(' on the stack 🥞 (0 < x count)
                cost += x ? 1 : 2;    //               +2 penalty if 🚫  preceeding '(' on the stack 🥞 (0 < x count)
            x = x ? x - 1 : 0;        // always pop the corresponding '(' from stack 🥞 (decrement x count) if it exists
        }
        i += doubleEnd(i) ? 2 : 1;    // skip past the 🍔 🍔 double '))' or 🍔 single ')'
    }
    return cost + (2 * x);           // +2 penalty for each stack.length '(' remaining on the stack since each needs a 🍔🍔 double '))' to reduce
};

// verbose
let minInsertions = (s, stack = [], cost = 0) => {
    let N = s.length,
        i = 0;
    let doubleEnd = i => s[i] == ')' && i + 1 < N && s[i + 1] == ')';
    while (i < N) {
        if (s[i] == '(') {                      // case '('  -> push to stack 🥞 (increment x count)
            stack.push('(');
        } else {
            if (doubleEnd(i))                   // 🍔 🍔 '))' ->  0 penalty if ✅  preceeding '(' on the stack 🥞 (0 < x count)
                cost += !stack.length;          //               +1 penalty if 🚫  preceeding '(' on the stack 🥞 (0 < x count)
            else                                // 🍔    ')'  -> +1 penalty if ✅  preceeding '(' on the stack 🥞 (0 < x count)
                cost += stack.length ? 1 : 2;   //               +2 penalty if 🚫  preceeding '(' on the stack 🥞 (0 < x count)
            if (stack.length)
                stack.pop();                    // always pop the corresponding '(' from stack 🥞 (decrement x count) if it exists
        }
        i += doubleEnd(i) ? 2 : 1;              // skip past the 🍔 🍔 double '))' or 🍔 single ')'
    }
    return cost + (2 * stack.length);           // +2 penalty for each stack.length '(' remaining on the stack since each needs a 🍔🍔 double '))' to reduce
};

// console.log(minInsertions('(()))'));
console.log(minInsertions(')))))))'));
