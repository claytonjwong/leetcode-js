/*
 * Facebook- Online Assessment
 * Completed March 23, 2020 5:18 PM
 * Your interview score of 7.76/10 beats 90% of all users.
 * Time Spent: 17 minutes 57 seconds
 * Time Allotted: 1 hour
 */

/*
 * 71. Simplify Path
 *
 * Q1: https://leetcode.com/problems/simplify-path/
 * A1: https://leetcode.com/problems/simplify-path/discuss/549428/Javascript-and-C%2B%2B-solutions
 */

let simplifyPath = (path, stack = []) => {
    let A = path.split('/').filter(dir => dir.length > 0);
    for (let dir of A)
        if (dir != '.' && dir != '..')
            stack.push(dir);
        else if (dir == '..' && stack.length > 0)
            stack.pop();
    return '/' + stack.join('/');
};


/*
 * 270. Closest Binary Search Tree Value
 *
 * Q2: https://leetcode.com/problems/closest-binary-search-tree-value
 * A2: https://leetcode.com/problems/closest-binary-search-tree-value/discuss/549446/Javascript-and-C%2B%2B-solutions
 */

let closestValue = (root, target, best = Infinity, ans = -1) => {
    let go = root => {
        let diff = Math.abs(target - root.val);
        if (best > diff)
            best = diff,
            ans = root.val;
        if (root.left) go(root.left);
        if (root.right) go(root.right);
    };
    go(root);
    return ans;
};
