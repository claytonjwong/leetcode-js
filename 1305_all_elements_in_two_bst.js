/*
 * 1305. All Elements in Two Binary Search Trees
 *
 * Q: https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
 * A: https://leetcode.com/problems/all-elements-in-two-binary-search-trees/discuss/464415/Javascript-and-C%2B%2B-solutions
 */
let getAllElements = (p, q, u = [], v = []) => {
    let go = (x, inorder) => {
        if (x.left) go(x.left, inorder);
        inorder.push(x.val);
        if (x.right) go(x.right, inorder);
    };
    let merge = (u, v, i = 0, j = 0, res = []) => {
        while (i < u.length && j < v.length)
            if (u[i] <= v[j])
                res.push(u[i++]);
            else
                res.push(v[j++]);
        while (i < u.length) res.push(u[i++]);
        while (j < v.length) res.push(v[j++]);
        return res;
    };
    if (p) go(p, u);
    if (q) go(q, v);
    return merge(u, v);
};