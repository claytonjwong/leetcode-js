/*
 * 958. Check Completeness of a Binary Tree
 *
 * Q: https://leetcode.com/problems/check-completeness-of-a-binary-tree/
 * A: https://leetcode.com/problems/check-completeness-of-a-binary-tree/discuss/543844/Javascript-and-C%2B%2B-solutions
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// let isCompleteTree = root => {
//     let q = [root];
//     while (q.length > 0) {
//         let cur = q[0]; q.shift();
//         while (!cur && q.length > 0)
//             if (q.shift())
//                 return false;
//         if (cur) q.push(cur.left), q.push(cur.right);
//     }
//     return true;
// };

let isCompleteTree = root => {
    let q = [root];
    for (;;) {
        let cur = q[0]; q.shift();
        if (!cur) return q.every(next => !next);
        q.push(cur.left), q.push(cur.right);
    }
};