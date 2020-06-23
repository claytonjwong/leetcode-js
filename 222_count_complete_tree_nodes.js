/*
 * 222. Count Complete Tree Nodes
 *
 * Q: https://leetcode.com/problems/count-complete-tree-nodes/
 * A: https://leetcode.com/problems/count-complete-tree-nodes/discuss/701940/Javascript-and-C%2B%2B-solutions
 */

let countNodes = root => !root ? 0 : 1 + countNodes(root.left) + countNodes(root.right);