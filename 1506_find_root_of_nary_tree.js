/*
 * 1506. Find Root of N-Ary Tree
 *
 * Q: https://leetcode.com/problems/find-root-of-n-ary-tree/
 * A: https://leetcode.com/problems/find-root-of-n-ary-tree/discuss/729168/Javascript-and-C%2B%2B-solutions
 */

// naive
let findRoot = (tree, children = new Set()) => {
    for (let node of tree)
        for (let child of node.children)
            children.add(child);
    return tree.filter(node => !children.has(node))[0]; // 🎯 root node is the only node which is *not* a child
};

// memory optimized
let findRoot = (tree, x = 0) => {
    for (let node of tree) {
        x ^= node.val; // 🎯 root node is only xor'ed once here, 🚫 child nodes are xor'ed once here and once below
        for (let child of node.children)
            x ^= child.val; // 🚫 child nodes are xor'ed a second time here
    }
    return tree.filter(node => node.val == x)[0];
};
