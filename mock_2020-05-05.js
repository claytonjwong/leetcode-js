/*
 * Facebook Phone Interview
 * Completed May 5, 2020 7:41 AM
 * 66%
 * Your interview score of 6.24/10 beats 66% of all users.
 * Time Spent: 25 minutes 4 seconds
 * Time Allotted: 1 hour 30 minutes
 */


/*
 * 349. Intersection of Two Arrays
 *
 * Q: https://leetcode.com/problems/intersection-of-two-arrays/
 * A: https://leetcode.com/problems/intersection-of-two-arrays/discuss/614936/Javascript-and-C%2B%2B-solutions
 */
let intersection = (A, B, ans = new Set()) => {
    let S = new Set(A);
    B.forEach(x => {
        if (S.has(x))
            ans.add(x);
    });
    return [...ans];
};

let intersection = (A, B, ans = new Set()) => {
    let S = new Set(A);
    return [...new Set(B.filter(x => S.has(x)))];
};


/*
 * 865. Smallest Subtree with all the Deepest Nodes
 *
 * Q: https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/
 * A: https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/discuss/614972/Javascript-and-C%2B%2B-solutions
 */
let subtreeWithAllDeepest = (root, max = 0, deep = new Set(), ans = null) => {
    let dfs = (root, i = 0) => {
        if (!root.left && !root.right) {
            if (max < i) {
                max = i;
                deep = new Set();
            }
            if (max == i)
                deep.add(root.val);
            return;
        }
        if (root.left) dfs(root.left, i + 1);
        if (root.right) dfs(root.right, i + 1);
    };
    dfs(root); // get max depth and a set of the deepest nodes
    let go = (root, i = 0) => {
        if (!root.left && !root.right) {
            let isDeep = i == max && deep.has(root.val);
            if (deep.size == 1 && isDeep)
                ans = root;
            return isDeep;
        }
        let L = root.left  ? go(root.left, i + 1)  : 0,
            R = root.right ? go(root.right, i + 1) : 0;
        if (!ans && L + R == deep.size)
            ans = root;
        return L + R;
    };
    go(root);
    return ans ? ans : root;
};

let subtreeWithAllDeepest = (root, max = 0, ans = null) => {
    let go = (root, i = 0) => {
        if (!root.left && !root.right)
            max = Math.max(max, i);
        let L = root.left ?  go(root.left, i + 1)  : i,
            R = root.right ? go(root.right, i + 1) : i;
        if (L == max && R == max)
            ans = root;
        return Math.max(L, R);
    };
    go(root);
    return ans;
}