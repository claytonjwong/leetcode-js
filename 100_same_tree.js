/*
 * 100. Same Tree
 *
 * Q: https://leetcode.com/problems/same-tree/
 * A: https://leetcode.com/problems/same-tree/discuss/734300/Javascript-and-C%2B%2B-solutions
 */

// 1-liner
let isSameTree = (a, b) => !a && !b ? true : !a || !b || a.val != b.val ? false : isSameTree(a.left, b.left) && isSameTree(a.right, b.right);

// verbose
let isSameTree = (a, b) => {
    if (!a && !b)                   // 🛑 base case: null nodes ✅
        return true;
    if (!a || !b || a.val != b.val) // 🛑 base case: nodes differ ❌
        return false;
    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
};
