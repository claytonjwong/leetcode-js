/*
 * 129. Sum Root to Leaf Numbers
 *
 * Q: https://leetcode.com/problems/sum-root-to-leaf-numbers/
 * A: https://leetcode.com/problems/sum-root-to-leaf-numbers/discuss/41378/simple-c-using-recursion/530599
 */

let sumNumbers = root => {
    let go = (root, pre = 0) => {
        let cur = 10 * pre + root.val;
        if (!root.left && !root.right)
            return cur; // accumulate the sum of "root to leaf node" values 🎯
        let L = root.left  ? go(root.left,  cur) : 0,
            R = root.right ? go(root.right, cur) : 0;
        return L + R;
    };
    return root ? go(root) : 0;
};