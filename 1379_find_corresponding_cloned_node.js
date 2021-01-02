/*
 * 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 *
 * Q: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 * A: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/discuss/537655/Kt-Js-Py3-Cpp-Traverse-A%2BB-Simultaneously
 */

let getTargetCopy = (A, B, T) => {
    let go = (a = A, b = B) => {
        if (a == T)
            return b;
        let L = a.left  ? go(a.left,  b.left)  : null,
            R = a.right ? go(a.right, b.right) : null;
        return L ? L : R;
    };
    return go();
};
