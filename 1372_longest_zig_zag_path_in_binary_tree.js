/*
 * 1372. Longest ZigZag Path in a Binary Tree
 *
 * Q: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
 * A: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/discuss/538986/Javascript-and-C%2B%2B-solutions
 */

// let longestZigZag = (root, left = 0xABC, right = 0xDEF, max = 0) => {
//     let go = (root, from = 0, len = 0) => {
//         max = Math.max(max, len);
//         if (root.left) {
//             if (from == right)
//                 go(root.left, left, 1 + len); // case 1: (from 👉) -> (to 👈)
//             else
//                 go(root.left, left, 1);
//         }
//         if (root.right) {
//             if (from == left)
//                 go(root.right, right, 1 + len); // case 2: (to 👉) <- (from 👈)
//             else
//                 go(root.right, right, 1);
//         }
//     };
//     go(root);
//     return max;
// };

let longestZigZag = (root, L = 0xABC, R = 0xDEF, max = 0) => {
    let go = (root, from = 0, len = 0) => {
        if (!root) return;
        max = Math.max(max, len);
        go(root.left,  L, 1 + (from == R ? len : 0)); // case 1: (from 👉) -> (to 👈)
        go(root.right, R, 1 + (from == L ? len : 0)); // case 2: (to 👉) <- (from 👈)
    };
    go(root);
    return max;
};