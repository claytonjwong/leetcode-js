/*
 * 1522. Diameter of N-Ary Tree
 *
 * Q: https://leetcode.com/problems/diameter-of-n-ary-tree/
 * A: https://leetcode.com/problems/diameter-of-n-ary-tree/discuss/755080/Javascript-Python3-C%2B%2B-post-order-traversal
 */

let diameter = (root, best = 0) => {
    let go = (root, next = 0) => {
        if (!root) // 🛑 base case
            return 0;
        for (let child of root.children) { // 🚀 DFS explore children
            let cur = Math.max(go(child))
            best = Math.max(best, cur + next); // 🎯 best pair of current local maximums
            next = Math.max(cur, next);
        }
        return 1 + next; // ⭐️ next candidate accumulated as the recursive stack unwinds
    };
    go(root);
    return best;
}
