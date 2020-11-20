/*
 * 1660. Correct a Binary Tree
 *
 * Q: https://leetcode.com/problems/correct-a-binary-tree/
 * A: https://leetcode.com/problems/correct-a-binary-tree/discuss/943193/Kt-Js-Py3-Cpp-Map-%2B-Seen-solutions
 */

// map
let correctBinaryTree = (root, m = new Map(), found = false) => {
    let go = root => {
        if (m.has(root)) {
            let target = m.get(root),
                parent = m.get(target);
            if (parent.left  == target) parent.left  = null;
            if (parent.right == target) parent.right = null;
            found = true;
        }
        if (!found && root.left)  go(root.left),  m.set(root.left,  root);
        if (!found && root.right) go(root.right), m.set(root.right, root);
        return root;
    };
    return go(root);
};

// seen
let correctBinaryTree = (root, seen = new Set(), found = false) => {
    let go = root => {
        seen.add(root);
        if (seen.has(root.right)) {
            found = true;
            return null;
        }
        if (!found && root.right) root.right = go(root.right);
        if (!found && root.left)  root.left  = go(root.left);
        return root;
    };
    return go(root);
};
