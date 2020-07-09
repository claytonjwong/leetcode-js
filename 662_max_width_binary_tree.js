/*
 * 662. Maximum Width of Binary Tree
 *
 * Q: https://leetcode.com/problems/maximum-width-of-binary-tree/
 * A: https://leetcode.com/problems/maximum-width-of-binary-tree/discuss/727201/Javascript-and-C%2B%2B-solutions
 */

// recursive
let widthOfBinaryTree = (root, m = {}, max = 0) => {
    let go = (root, depth = 0, i = 1) => {
        if (!m[depth])
            m[depth] = i; // first i-th value 👀 seen at this depth is ⭐️ min i-th value at this depth
        max = Math.max(max, i - m[depth] + 1); // 🎯 subtract each i-th value from min i-th value to find max width (+1 for i..j inclusive)
        if (root.left)  go(root.left,  depth + 1, 2 * (i - m[depth]) + 1); // 🚫 avoid int overflow by subtracting each i-th value by the min per depth
        if (root.right) go(root.right, depth + 1, 2 * (i - m[depth]) + 2); // 🚫 avoid int overflow by subtracting each i-th value by the min per depth
        return max;
    };
    return !root ? 0 : go(root);
};

// iterative
let widthOfBinaryTree = (root, m = {}, depth = 0, max = 0) => {
    let q = [[ root, 1 ]];
    while (q.length) {
        let K = q.length;
        while (K--) {
            let [root, i] = q.shift();
            if (!m[depth])
                m[depth] = i; // first i-th value 👀 seen at this depth is ⭐️ min i-th value at this depth
            max = Math.max(max, i - m[depth] + 1); // 🎯 subtract each i-th value from min i-th value to find max width (+1 for i..j inclusive)
            if (root.left)  q.push([ root.left,  2 * (i - m[depth]) + 1 ]); // 🚫 avoid int overflow by subtracting each i-th value by the min per depth
            if (root.right) q.push([ root.right, 2 * (i - m[depth]) + 2 ]); // 🚫 avoid int overflow by subtracting each i-th value by the min per depth
        }
        ++depth;
    }
    return max;
};
