/*
 * 437. Path Sum III
 *
 * Q: https://leetcode.com/problems/path-sum-iii/
 * A: https://leetcode.com/problems/path-sum-iii/discuss/671026/Javascript-and-C%2B%2B-solutions
 */

let pathSum = (root, T, cnt = 0) => {
    let go = (root, sum = 0) => {
        if (!root)
            return 0;
        sum += root.val;
        return Number(sum == T) + go(root.left, sum) + go(root.right, sum);
    };
    let traverse = root => {
        if (!root)
            return 0;
        return go(root) + traverse(root.left) + traverse(root.right);
    };
    return traverse(root);
};
