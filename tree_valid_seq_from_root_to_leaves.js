/*
 * Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree
 *
 * Q: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/532/week-5/3315/
 * A:
 */

let isValidSequence = (root, A) => {
    let N = A.length;
    let go = (root, i = 0, depth = 0) => {
        if (!root || root.val != A[i] || depth > N - 1)
            return false;
        if (i == N - 1)
            return depth == i && root.val == A[i] && !root.left && !root.right; // root to leaf node? 🎯
        return go(root.left, i + 1, depth + 1) || go(root.right, i + 1, depth + 1);
    };
    return go(root);
};