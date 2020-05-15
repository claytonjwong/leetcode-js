/*
 * Apple- Online Assessment
 * CompletedMay 14, 2020 5:51 PM
 * 56%
 * Your interview score of 5.36/10 beats 56% of all users.
 * Time Spent: 39 minutes 46 seconds
 * Time Allotted: 1 hour
 */

let _ = require('lodash');

/*
 * 937. Reorder Data in Log Files
 *
 * Q: https://leetcode.com/problems/reorder-data-in-log-files/
 * A: https://leetcode.com/problems/reorder-data-in-log-files/discuss/633431/Javascript-and-C%2B%2B-solutions
 */
let reorderLogFiles = A => {
    let [L, D] = _.partition(A, log => { // letters, digits
        let i = log.indexOf(' ');
        return log[i + 1].charCodeAt(0) >= 97; // 'a'
    });
    L.sort((a, b) => {
        let i = a.indexOf(' '),
            j = b.indexOf(' ');
        return a.substring(i) == b.substring(j)
             ? a.substring(0, i).localeCompare(b.substring(0, j))
             : a.substring(i).localeCompare(b.substring(j));
    })
    return L.concat(D);
};

/*
 * 22. Generate Parentheses
 *
 * Q: https://leetcode.com/problems/generate-parentheses/
 * A: https://leetcode.com/problems/generate-parentheses/discuss/632525/Javascript-and-C%2B%2B-solutions
 */
let generateParenthesis = (N, ans = []) => {
    let go = (open = 0, close = 0, path = []) => {
        if (path.length == 2 * N) // target 🎯
            ans.push(path.join(''));
        if (open < N)     go(open + 1, close, path.concat('(')); // open
        if (open > close) go(open, close + 1, path.concat(')')); // close
    };
    go();
    return ans;
};
