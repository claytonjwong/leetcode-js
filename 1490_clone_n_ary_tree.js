/*
 * 1490. Clone N-ary Tree
 *
 * Q: https://leetcode.com/problems/clone-n-ary-tree/
 * A: https://leetcode.com/problems/clone-n-ary-tree/discuss/707049/Javascript-and-C%2B%2B-solutions
 */

let cloneTree = root => {
    let go = root => {
        if (!root)
            return null;
        let copy = new Node(root.val);
        for (let child of root.children)
            copy.children.push(go(child));
        return copy;
    };
    return go(root);
};
