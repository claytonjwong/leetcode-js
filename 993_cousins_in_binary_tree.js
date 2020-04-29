/*
 * 993. Cousins in Binary Tree
 *
 * Q: https://leetcode.com/problems/cousins-in-binary-tree/
 * A: https://leetcode.com/problems/cousins-in-binary-tree/discuss/602323/Javascript-and-C%2B%2B-solutions
 */

let isCousins = (root, x, y, depth = 1, P = {}, D = {}) => {
    let q = [ root ];
    while (q.length) {
        let K = q.length;
        while (K--) {
            let p = q.shift(); // parent
            if (p.left) {
                if (p.left.val == x) P.x = p.val, D.x = depth;
                if (p.left.val == y) P.y = p.val, D.y = depth;
                q.push(p.left);
            }
            if (p.right) {
                if (p.right.val == x) P.x = p.val, D.x = depth;
                if (p.right.val == y) P.y = p.val, D.y = depth;
                q.push(p.right);
            }
        }
        ++depth;
    }
    return P.x != P.y && D.x == D.y; // diff parent and same depth 🎯
};