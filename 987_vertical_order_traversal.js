/*
 * 987. Vertical Order Traversal of a Binary Tree
 *
 * Q: https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 * A: https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/discuss/778164/Javascript-and-C%2B%2B-solutions
 */

let verticalTraversal = (root, m = new Map(), ans = []) => {
    let go = (root, x = 0, y = 0) => {
        if (!root)
            return;
        if (!m.has(x))
            m.set(x, new Map());
        if (!m.get(x).has(y))
            m.get(x).set(y, []);
        m.get(x).get(y).push(root.val);
        go(root.left, x - 1, y + 1);
        go(root.right, x + 1, y + 1);
    };
    go(root);
    for (let x = -999; x <= 999; ++x) {
        if (!m.has(x))
            continue;
        [...m.get(x).entries()].forEach(([ _, nodes ]) => nodes.sort((a, b) => a - b)); // sort nodes with same y by value
        let cur = [...m.get(x).entries()].sort(([ y1, _1 ], [ y2, _2 ]) => y1 - y2).map(([ _, nodes ]) => nodes);
        ans.push(cur.flat());
    }
    return ans;
};
