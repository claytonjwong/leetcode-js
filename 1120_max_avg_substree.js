/*
 * 1120. Maximum Average Subtree
 *
 * Q: https://leetcode.com/problems/maximum-average-subtree/
 * A: https://leetcode.com/problems/maximum-average-subtree/discuss/765869/Javascript-Python3-C%2B%2B-post-order-traversal
 */

let maximumAverageSubtree = (root, max = 0) => {
    let go = root => {
        if (!root)
            return [0, 0];
        let [L, M] = go(root.left);
        let [R, N] = go(root.right);
        let sum = root.val + L + R,
            cnt = 1 + M + N;  // +1 for root node
        max = Math.max(max, sum / cnt);
        return [sum, cnt];
    };
    go(root);
    return max;
};
