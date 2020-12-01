/*
 * 104. Maximum Depth of Binary Tree
 *
 * Q: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * A: https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/955868/Kt-Js-Py3-Cpp-1-Liners
 */

let maxDepth = root => !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
